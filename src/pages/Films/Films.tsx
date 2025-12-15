import {useState, useMemo, useRef} from "react";
import {List} from "../../components/Films/List/List";
import {Film} from "../../api/types";
import {People} from "../../components/Films/People/People";
import {useGetPeopleQuery} from "../../api/ghibliApi";

export const Films = () => {
    const [selectedFilm, setSelectedFilm] = useState<Film | null>(null);
    const listRef = useRef<HTMLDivElement>(null);

    const {data, error} = useGetPeopleQuery();

    const selectedFilmPeople = useMemo(() => {
        if (!data || !selectedFilm) return [];
        return data?.filter(person => person.films.includes(
            `https://ghibliapi.vercel.app/films/${selectedFilm.id}`
        ));
    }, [data, selectedFilm]);

    if (error) {
        console.error(error);
        return <p>Error loading people. Please try again later.</p>;
    }

    const handleClosePeople = () => {
        setSelectedFilm(null);
        listRef.current?.focus();
    };

    return (
        <div>
            <h1 tabIndex={-1} ref={listRef}>Films</h1>
            <List setSelectedFilm={setSelectedFilm} selectedFilm={selectedFilm}/>
            {
                selectedFilm &&
                selectedFilmPeople &&
                <People film={selectedFilm} people={selectedFilmPeople} onClose={handleClosePeople}/>
            }
        </div>
    )
}