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

        const handleShowButton = () => {
            if (!show) {
                setShowButton(el.scrollHeight > el.clientHeight);
            } else {
                setShowButton(true);
            }
        };

        handleShowButton();

        const observer = new ResizeObserver(() => {
            handleShowButton();
        });

        observer.observe(el);

        return () => observer.disconnect();
    }, [text, show]);

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