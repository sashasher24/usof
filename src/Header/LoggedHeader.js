import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import goblet from '../images/goblet.png';

import './loggedHeader.css'

function LoggedHeader(props) {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [data, setData] = useState({});

    let url = `https://api.stackexchange.com/2.2/me?site=stackoverflow&filter=!--1nZuvlShP1&key=${process.env.REACT_APP_API_KEY}&access_token=${props.token}`;
    
    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(
            (result) => {
                setData(result.items);
                setIsLoaded(true);
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        )
    }, []);
    
    console.log(data);

    console.log(data);

    if(error) {
        return <div>Error: {error.message}</div>;
    } else if(!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <div className="loggedUserHeader">
                <Link to={`users/${data[0].user_id}`}><img className="loggedUserHeaderImg" src={data[0].profile_image} alt="me" /></Link>
                <img className="loggedUserHeaderImg" src='https://img.icons8.com/ios-filled/100/000000/inbox.png' alt='inbox' />
                <img className="loggedUserHeaderImg" src={goblet} alt='goblet' />
                <img className="loggedUserHeaderImg" src="https://img.icons8.com/ios/100/000000/settings--v1.png" alt='settings' />
            </div>
        )
    }
}

export default LoggedHeader;