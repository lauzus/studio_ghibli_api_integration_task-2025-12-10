import styles from './Button.module.scss';

interface PartialsButtonProps {
    action: () => void;
    title: string;
}

export const Button = ({action, title}: PartialsButtonProps) => {
    return (
        <button className={styles.container} onClick={action}>{title}</button>
    )
}