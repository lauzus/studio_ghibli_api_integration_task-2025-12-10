import {NavLink} from "react-router-dom";
import styles from './SideNavBar.module.scss';
import {Button} from "../Partials/Button/Button";

interface SideNavBarProps {
    onSkip: () => void;
}

const routes = [
    {path: '/', label: 'About', key: 1},
    {path: '/films', label: 'Films', key: 2}
];
export const SideNavBar = ({onSkip}: SideNavBarProps) => {
    return (
        <nav aria-label={'Main navigation'} className={styles.container}>
            <p>Navigation:</p>
            <Button action={onSkip} title={'Skip to content'} hidden={true}/>
            <ul>
                {
                    routes.map(route => (
                        <li key={route.key}>
                            <NavLink to={route.path}
                                     className={({isActive}) =>
                                         isActive ? styles.current : ''
                                     }
                            >{route.label}</NavLink>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}