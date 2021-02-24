import {  useState,  useEffect } from 'react';

import './users.css'

function Users() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [data, setData] = useState({});

    const url = 'https://api.stackexchange.com/2.2/users?site=stackoverflow&key=wud)gxqaQ5vssDmltw6d1A((';
    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(
            (result) => {
                setData(result.items);
                setIsLoaded(true);
                
                console.log(result.items);
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        )
    }, []);

    const displayRep = rep => {
        if(rep > 1000000) {
            rep = Math.floor(rep/1000000) + Number(((rep % 1000000)*0.000001).toFixed(1));
            return `${rep}m`;
        } else if(rep > 1000) {
            rep = Math.floor(rep/1000) + Number(((rep % 1000)*0.001).toFixed(1));
            return `${rep}k`
        } else return `${rep}`;
    }

    const getTags = id => {
        // console.log('tags');
        fetch(`https://api.stackexchange.com/2.2/users/${id}/top-tags?site=stackoverflow&key=wud)gxqaQ5vssDmltw6d1A((`)
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result);
                    return(
                        result.items.map(item => (
                            <span>{item.tag_name}</span>
                        ))
                    )
                }
            )
    }

    // console.log(data);

    if(error) {
        return <div>Error: {error.message}</div>;
    } else if(!isLoaded) {
        return <div>Loading users ...</div>;
    } else {
        return (
            <div className="container">
                {data.map(item => (
                    <div key={item.user_id} className="userBlock">
                        <img src={item.profile_image} className="profileImage"></img>
                        <div className="userInfo">
                            <span className="userName">{item.display_name}</span>
                            <span className="userLocation">{item.location}</span>
                            <span className="repInfo">
                                <span className="reputation"> {displayRep(item.reputation)} </span>
                                <span className="bronze"> b {item.badge_counts.bronze} </span>
                                <span className="silver"> s {item.badge_counts.silver} </span>
                                <span className="gold"> g{item.badge_counts.gold} </span>
                            </span>
                            <span className="tags">{() => getTags(item.user_id)}</span>

                        </div>
                    </div>
                ))}
            </div>
        )
    }
}

export default Users;