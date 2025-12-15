import styles from './Button.module.scss';

interface PartialsButtonProps {
    action: () => void;
    title: string;
    hidden?: boolean;
    srSkip?: boolean;
    disabled?: boolean;
}

export const Button = ({action, title, hidden, disabled}: PartialsButtonProps) => {
    return (
        <button className={`${styles.container} ${hidden ? styles.hidden : ''} ${disabled ? styles.disabled : ''}`}
                onClick={action}
        >{title}</button>
    )
}