import React from 'react';
import {render, screen} from '@testing-library/react';
import {People} from "./People";
import {Film, Person} from "../../../api/types";

const mockFilm: Film = {
    id: 'film-1',
    title: 'Film 1',
    description: 'Desc 1',
    release_date: '2001',
};

const mockPeople: Person[] = [
    {
        id: 'person-1',
        name: 'Person 1',
        age: 32,
        gender: 'Male',
        eye_color: 'green',
        films: ['film-1', 'film-2'],
    },
    {
        id: 'person-2',
        name: 'Person 2',
        age: 25,
        gender: 'Female',
        eye_color: 'brown',
        films: ['film-1'],
    }
];

describe('People', () => {
    it('renders people', () => {
        render(<People people={mockPeople} onClose={() => {}} film={mockFilm}/>);

        expect(screen.getByText(`People in ${mockFilm.title}:`)).toBeInTheDocument();
        expect(screen.getByText('Name')).toBeInTheDocument();
        expect(screen.getByText('Age')).toBeInTheDocument();
        expect(screen.getByText('Gender')).toBeInTheDocument();
        expect(screen.getByText('Eye color')).toBeInTheDocument();

        mockPeople.forEach(person => {
            expect(screen.getByText(person.name)).toBeInTheDocument();
            expect(screen.getByText(person.age)).toBeInTheDocument();
            expect(screen.getByText(person.gender)).toBeInTheDocument();
            expect(screen.getByText(person.eye_color)).toBeInTheDocument();
        });
    });

    it('renders message when no people', () => {
        render(<People people={[]} film={mockFilm} onClose={() => {}} />);

        expect(screen.getByText('No people for this film')).toBeInTheDocument();
    });
});