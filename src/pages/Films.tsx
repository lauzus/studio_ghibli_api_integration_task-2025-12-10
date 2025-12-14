import {useState, useMemo} from "react";
import {List} from "../components/Films/List/List";
import {Film} from "../api/types";
import {People} from "../components/Films/People/People";
import {useGetPeopleQuery} from "../api/ghibliApi";

export const Films = () => {
    const [selectedFilm, setSelectedFilm] = useState<Film | null>(null);

    const {data, isLoading} = useGetPeopleQuery();

    const selectedFilmPeople = useMemo(() => {
        if (!data || !selectedFilm) return [];
        return data?.filter(person => person.films.includes(
            `https://ghibliapi.vercel.app/films/${selectedFilm.id}`
        ));
    }, [data, selectedFilm])

    return (
        <div>
            <List setSelectedFilm={setSelectedFilm}/>
            {
                selectedFilm &&
                selectedFilmPeople &&
                <People film={selectedFilm} people={selectedFilmPeople}/>
            }
        </div>
    )
}