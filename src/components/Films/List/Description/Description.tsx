import {useState, useRef, useEffect} from "react";
import styles from "./Description.module.scss";
import {Button} from "../../../Partials/Button/Button";

interface FilmListDescriptionProps {
    text: string;
}

export const Description = ({text}: FilmListDescriptionProps) => {
    const [show, setShow] = useState(false);
    const [showButton, setShowButton] = useState(false);
    const textRef = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        const el = textRef.current;
        if (!el) return;

        setShowButton(el.scrollHeight > el.clientHeight);

        const observer = new ResizeObserver(() => {
            setShowButton(el.scrollHeight > el.clientHeight);
        });

        observer.observe(el);

        return () => observer.disconnect();
    }, [text]);

    return (
        <div className={`${styles.container} ${show && styles.expanded}`}>
            <p ref={textRef}>{text}</p>
            {
                showButton &&
                <Button action={() => setShow(!show)} title={show ? 'Read Less' : 'Read More'}/>
            }
        </div>
    )
};