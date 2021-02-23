import React from 'react';
import { NavLink, Link} from 'react-router-dom';
import './header.css';

class Header extends React.Component {
  render() {
    return (
      <header>
        <Link to="/"><img src="" alt="logo"/></Link>
        <input type="text" name="search" id="searchInput" />
        
        <nav>
          <li><NavLink to="/">Main</NavLink></li>
          <li><NavLink to="/users">Users</NavLink></li>
          <li><NavLink to="/tags">Tags</NavLink></li>
        </nav>
        
        <button>Log in</button>
      </header>
    );
  }
}

export default Header;