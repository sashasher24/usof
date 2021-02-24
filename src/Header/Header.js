import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './header.css';

class Header extends React.Component {
    render() {
        return ( 
            <header >
                <Link to = "/"> <img src="https://stackoverflow.design/assets/img/logos/so/logo-stackoverflow.png" alt = "logo" id="logo" /></Link> 
                <div className="search">
                    <input type = "text" name = "search" placeholder = "Search ..." id = "searchInput" />
                    <button type="submit" id="searchButton">GO</button>
                </div>

                <nav >
                <li> <NavLink to = "/"> Main </NavLink> </li >
                <li> <NavLink to = "/users"> Users </NavLink> </li>
                <li> <NavLink to = "/tags"> Tags </NavLink> </li>
                </nav>

                <button> Log in </button> 
            </header>
        );
    }
}

export default Header;