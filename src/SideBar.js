import { NavLink } from 'react-router-dom';

import './sideBar.css'

function SideBar() {
    return (
        <nav >
            <li> <NavLink to = "/"> Main </NavLink> </li >
            <li> <NavLink to = "/users"> Users </NavLink> </li>
            <li> <NavLink to = "/tags"> Tags </NavLink> </li>
        </nav>
    )
}

export default SideBar;