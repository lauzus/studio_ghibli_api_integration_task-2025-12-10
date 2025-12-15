import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import {Film} from "../../../api/types";
import {List} from "./List";
import {configureStore} from "@reduxjs/toolkit";
import {Provider} from "react-redux";

const mockFilms: Film[] = [
    {id: '1', title: 'Film One', description: 'Desc 1', release_date: '2001'},
    {id: '2', title: 'Film Two', description: 'Desc 2', release_date: '2002'},
];

jest.mock('../../../api/ghibliApi');

// eslint-disable-next-line import/first
import {useGetFilmsQuery} from '../../../api/ghibliApi';

jest.mock('../../Partials/Button/Button', () => ({
    Button: ({action, title}: any) => (
        <button onClick={action}>{title}</button>
    ),
}));

jest.mock('./Description/Description', () => ({
    Description: ({text}: any) => <p>{text}</p>,
}));

describe('List', () => {
    const mockSetSelectedFilm = jest.fn();

    const renderList = (selectedFilm: Film | null = null) => {
        const testStore = configureStore({
            reducer: {
                _dummy: () => ({}),
            },
        });

        return render(
            <Provider store={testStore}>
                <List setSelectedFilm={mockSetSelectedFilm} selectedFilm={selectedFilm}/>
            </Provider>
        );
    };

    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('renders list of films', () => {
        (useGetFilmsQuery as jest.Mock).mockReturnValue({
            data: mockFilms,
            isLoading: false,
            error: undefined,
        });

        renderList();

        mockFilms.forEach(film => {
            expect(screen.getByText(film.title)).toBeInTheDocument();
            expect(screen.getByText(film.description)).toBeInTheDocument();
            expect(screen.getByText((_content, element) => {
                return element?.textContent === `Release date: ${film.release_date}`;
            })).toBeInTheDocument();
        });
    });

    it('displays loading state', () => {
        (useGetFilmsQuery as jest.Mock).mockReturnValue({
            data: undefined,
            isLoading: true,
            error: undefined,
        });

        renderList();

        expect(screen.getByText('Loading...')).toBeInTheDocument();
    });

    it('displays error state', () => {
        const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {
        });

        (useGetFilmsQuery as jest.Mock).mockReturnValue({
            data: undefined,
            isLoading: false,
            error: {message: 'Test error'},
        });

        renderList();

        expect(screen.getByText('Error loading films. Please try again later.')).toBeInTheDocument();

        consoleErrorSpy.mockRestore();
    });

    it('sets selected film', () => {
        (useGetFilmsQuery as jest.Mock).mockReturnValue({
            data: mockFilms,
            isLoading: false,
            error: undefined,
        });

        renderList();

        const buttons = screen.getAllByText('Show People');
        fireEvent.click(buttons[0]);

        expect(mockSetSelectedFilm).toHaveBeenCalledWith(mockFilms[0]);
    });
});