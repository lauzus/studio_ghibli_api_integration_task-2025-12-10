import {NavLink} from "react-router-dom";

export const SideNavBar = () => {
    return (
        <ul>
            <li>
                <NavLink to="/about">About</NavLink>
            </li>
            <li>
                <NavLink to="/films">Films</NavLink>
            </li>
        </ul>
    )
}