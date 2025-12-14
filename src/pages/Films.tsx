import React from "react";
import {useGetFilmsQuery} from "../api/ghibliApi";
import {Film} from "../api/types";

export const Films = () => {
    const {data, isLoading} = useGetFilmsQuery();
    const [selectedFilm, setSelectedFilm] = React.useState<Film | null>(null);

    if (isLoading) return <p>Loading...</p>;

    return (
        <div>
            <ul>
                {data?.map((film: Film) => (
                    <li key={film.id} onClick={() => setSelectedFilm(film)}>{film.title}</li>
                ))}
            </ul>
            <p>{selectedFilm?.title}</p>
        </div>
    )
}