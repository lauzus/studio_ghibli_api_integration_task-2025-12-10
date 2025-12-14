import {useGetFilmsQuery} from "../../../api/ghibliApi";
import {Film} from "../../../api/types";
import styles from "./List.module.scss";
import {Description} from "./Description/Description";
import {Button} from "../../Partials/Button/Button";

interface FilmsListProps {
    setSelectedFilm: (film: Film) => void;
}

export const List = ({setSelectedFilm}: FilmsListProps) => {
    const {data, error, isLoading} = useGetFilmsQuery();

    if (isLoading) return <p>Loading...</p>;

    if (error) {
        console.error(error);
        return <p>Error loading films. Please try again later.</p>;
    }

    return (
        <div className={styles.container}>
            {data?.map((film: Film) => (
                <div key={film.id} className={styles.card}>
                    <p className={styles.title}>{film.title}</p>
                    <Description text={film.description}/>
                    <p><b>Release date:</b> {film.release_date}</p>
                    <Button action={() => setSelectedFilm(film)} title="Show People"/>
                </div>
            ))}
        </div>
    )
}