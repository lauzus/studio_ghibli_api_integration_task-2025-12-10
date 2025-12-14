import {useState} from "react";
import styles from "./Description.module.scss";
import {Button} from "../../../Partials/Button/Button";

interface FilmListDescriptionProps {
    text: string;
}

export const Description = ({text}: FilmListDescriptionProps) => {
    const [show, setShow] = useState(false);

    return (
        <div className={`${styles.container} ${show && styles.expanded}`}>
            <p>{text}</p>
            <Button action={() => setShow(!show)} title={show ? 'Read Less' : 'Read More'} srSkip={true} />
        </div>
    )
};