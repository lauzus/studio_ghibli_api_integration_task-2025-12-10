import React from 'react';
import {render, screen} from '@testing-library/react';
import {Description} from "./Description";

describe('Description', () => {
    let resizeCallback: ResizeObserverCallback;

    beforeAll(() => {
        global.ResizeObserver = class ResizeObserver {
            constructor(cb: ResizeObserverCallback) {
                resizeCallback = cb;
            }
            observe() {}
            unobserve() {}
            disconnect() {}
        };
    });

    it('renders description', () => {
        render(<Description text={'Test description'}/>);

        expect(screen.getByText('Test description')).toBeInTheDocument();
    });

    it('does not show Read More button when text fits', () => {
        render(<Description text={'Test description'}/>);

        const paragraph = screen.getByText('Test description');

        Object.defineProperty(paragraph, 'scrollHeight', {configurable: true, value: 100});
        Object.defineProperty(paragraph, 'clientHeight', {configurable: true, value: 100});

        expect(screen.queryByText('Read More')).not.toBeInTheDocument();
    });

    it('shows Read More button when text is too long', async () => {
        render(<Description text="Test description" />);

        const paragraph = screen.getByText('Test description');

        Object.defineProperty(paragraph, 'scrollHeight', {
            configurable: true,
            value: 200,
        });
        Object.defineProperty(paragraph, 'clientHeight', {
            configurable: true,
            value: 100,
        });

        resizeCallback([], {} as ResizeObserver);

        expect(await screen.findByText('Read More')).toBeInTheDocument();
    });
})