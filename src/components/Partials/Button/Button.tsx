import styles from './Button.module.scss';

interface PartialsButtonProps {
    action: () => void;
    title: string;
    hidden?: boolean;
    srSkip?: boolean;
}

export const Button = ({action, title, hidden, srSkip}: PartialsButtonProps) => {
    return (
        <button className={`${styles.container} ${hidden && styles.hidden}`}
                onClick={action}
                aria-hidden={srSkip}
        >{title}</button>
    )
}