import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import LoggedHeader from './LoggedHeader';
import axios from 'axios';

function Header(props) {

    const [isNotLogged, setIsNotLogged] = useState(true);
    const [token, setToken] = useState();
    const [loggedIn, setLoggedIn] = useState(false);

    let tokens = null;

    const auth = data => {
        window.SE.authenticate({
            success: (data) => {
                tokens = data;
                console.log(tokens);
                setToken(tokens.accessToken);
                props.getUsersToken(tokens.accessToken);
                setLoggedIn(true);
            }, // Приложение авторизовало пользователя
            error: (data) => {
                alert('Я не получил доступ :(');
                // isLogged = false;
            }, // Приложение не авторизовало пользователя
        });
    }

    // useEffect(() => {
    //     window.SE.init({
    //         clientId: 19680, // Здесь мы ставим выданный нам clientId
    //         key: 'wud)gxqaQ5vssDmltw6d1A((', // А здесь соответственно key
    //         channelUrl: 'https://sashasher24.github.io/usof', // Особое внимание стоит уделить этому полю. Здесь нужно указать домен, на котором хостится и крутится приложение
    //         complete: () => {
    //             console.log('complete');
    //             setIsNotLogged(false);
    //         }// Здесь мы указываем некоторую функцию, которая будет выполнена в случае успеха
    //     });    
    // }, [])

    // console.log(.env.local.REACT_APP_API_KEY);

    const logOut = () => {
        axios.get(`https://api.stackexchange.com/2.2/apps/${token}/de-authenticate?key=${process.env.REACT_APP_API_KEY}`)
            .then(() => {
                setLoggedIn(false);
            })
        console.log('log out');
    }

    console.log("me1");

    return ( 
        <header >
            <Link to = "/"> <img src="https://stackoverflow.design/assets/img/logos/so/logo-stackoverflow.png" alt = "logo" id="logo" /></Link> 
            <div className="search">
                <input type = "text" name = "search" placeholder = "Search ..." id = "searchInput" />
                <button type="submit" id="searchButton">GO</button>
            </div>

            {loggedIn ? <LoggedHeader token={token} /> : ''}

            {/* <LoggedHeader /> */}

            <button onClick={loggedIn ? logOut : auth} disabled={isNotLogged}> {loggedIn ? 'Log out' : 'Log in'} </button> 
        </header>
    );
}

    export default Header;