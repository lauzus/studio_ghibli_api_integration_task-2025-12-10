import React from 'react';
import styles from './App.module.scss';
import {useGetFilmsQuery} from './api/ghibliApi';
import {Film} from "./api/types";

function App() {
    const {data, isLoading} = useGetFilmsQuery();
    const [selectedFilm, setSelectedFilm] = React.useState<Film | null>(null);

    if (isLoading) return <p>Loading...</p>;

    return (
        <div className={styles.container}>
            <ul>
                {data?.map((film: Film) => (
                    <li key={film.id} onClick={() => setSelectedFilm(film)}>{film.title}</li>
                ))}
            </ul>
            <p>{selectedFilm?.title}</p>
        </div>
    );
}

export default App;
