import {Film, Person} from "../../../api/types";
import styles from "./People.module.scss";
import {useEffect, useRef} from "react";
import {Button} from "../../Partials/Button/Button";

interface FilmsSelectedProps {
    people: Person[];
    film: Film;
    onClose: () => void;
}

export const People = ({film, people, onClose}: FilmsSelectedProps) => {
    const tableRef = useRef<HTMLTableElement>(null);

    useEffect(() => {
        tableRef.current?.focus();
    }, [people]);

    return (
        <div className={styles.container}>
            <h2 tabIndex={-1} ref={tableRef}>People in {film.title}:</h2>
            {
                people && people.length ?
                    <table>
                        <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Age</th>
                            <th scope="col">Gender</th>
                            <th scope="col">Eye color</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            people.map(person => (
                                <tr key={person.id}>
                                    <td>{person.name}</td>
                                    <td>{person.age}</td>
                                    <td>{person.gender}</td>
                                    <td>{person.eye_color}</td>
                                </tr>
                            ))
                        }
                        </tbody>
                    </table> :
                    <p>No people for this film</p>
            }
            <Button action={onClose} title={'Close List'} hidden={true} />
        </div>
    )
}