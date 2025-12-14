import {Film, Person} from "../../../api/types";

interface FilmsSelectedProps {
    people: Person[];
    film: Film;
}

export const People = ({film, people}: FilmsSelectedProps) => {
    return (
        <div>
            <h2>{film.title}</h2>
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
        </div>
    )
}