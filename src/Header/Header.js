import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './header.css';

function Header () {

    useEffect(() => {
        window.SE.init({
            clientId: 19680, // Здесь мы ставим выданный нам clientId
            key: 'wud)gxqaQ5vssDmltw6d1A((', // А здесь соответственно key
            channelUrl: 'sashasher24.github.io', // Особое внимание стоит уделить этому полю. Здесь нужно указать домен, на котором хостится и крутится приложение
            complete: function (data) { alert(`Я загрузился!`); } // Здесь мы указываем некоторую функцию, которая будет выполнена в случае успеха
        });    
    }, [])
  
    console.log("me1");

    return ( 
        <header >
            <Link to = "/"> <img src="https://stackoverflow.design/assets/img/logos/so/logo-stackoverflow.png" alt = "logo" id="logo" /></Link> 
            <div className="search">
                <input type = "text" name = "search" placeholder = "Search ..." id = "searchInput" />
                <button type="submit" id="searchButton">GO</button>
            </div>

            <button> Log in </button> 
        </header>
    );
}

export default Header;