import { NavLink } from 'react-router-dom';

import './sideBar.css'

function SideBar(props) {
    return (
        <nav >
            <li> <NavLink to = "/" onClick={() => {props.setSortOrder('', ''); props.changeTag('')}}> Main </NavLink> </li >
            <li> <NavLink to = "/users" onClick={() => props.setSortOrder('', '')}> Users </NavLink> </li>
            <li> <NavLink to = "/tags" onClick={() => props.setSortOrder('', '')}> Tags </NavLink> </li>
        </nav>
    )
}

export default SideBar;