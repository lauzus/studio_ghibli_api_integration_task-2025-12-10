import styles from './Button.module.scss';

interface PartialsButtonProps {
    action: () => void;
    title: string;
    hidden?: boolean;
}

export const Button = ({action, title, hidden}: PartialsButtonProps) => {
    return (
        <button className={`${styles.container} ${hidden && styles.hidden}`} onClick={action}>{title}</button>
    )
}