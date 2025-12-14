import {NavLink} from "react-router-dom";
import styles from './SideNavBar.module.scss';

const routes = [
    {path: '/about', label: 'About', key: 1},
    {path: '/films', label: 'Films', key: 2}
]
export const SideNavBar = () => {
    return (
        <div className={styles.container}>
            <p>Navigation:</p>
            <ul>
                {
                    routes.map(route => (
                        <li key={route.key}>
                            <NavLink to={route.path}
                                     className={({ isActive }) =>
                                         isActive ? styles.current : ''
                                     }
                            >{route.label}</NavLink>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}