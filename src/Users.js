import {  useState,  useEffect } from 'react';
import UserPreview from './UserPreview';

import './users.css'
import UsersGeneralTags from './UsersGeneralTags';

function Users() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [data, setData] = useState({});

    const url = 'https://api.stackexchange.com/2.2/users?site=stackoverflow&filter=!9_bDDp)d5&key=wud)gxqaQ5vssDmltw6d1A((';
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

    const displayRep = rep => {
        if(rep > 1000000) {
            rep = Math.floor(rep/1000000) + Number(((rep % 1000000)*0.000001).toFixed(1));
            return `${rep}m`;
        } else if(rep > 1000) {
            rep = Math.floor(rep/1000) + Number(((rep % 1000)*0.001).toFixed(1));
            return `${rep}k`
        } else return `${rep}`;
    }

    console.log(data);

    if(error) {
        return <div>Error: {error.message}</div>;
    } else if(!isLoaded) {
        return <div>Loading users ...</div>;
    } else {
        return (
            <div className="container">
                {data.map(item => (
                    <div className="user">
                        <div key={item.user_id} className="userBlock">
                            <img src={item.profile_image} className="profileImage"></img>
                            <div className="userInfo">
                                <span className="userName">{item.display_name}</span>
                                <span className="userLocation">{item.location}</span>
                                <span className="repInfo">
                                    <span className="reputation"> {displayRep(item.reputation)} </span>
                                    
                                </span>
                                <span className="tags"><UsersGeneralTags id={item.user_id} /></span>

                            </div>
                        </div>
                        <div className="userPreviewBlock">
                            <UserPreview
                                name={item.display_name} 
                                image={item.profile_image}
                                location={item.location}
                                reputation={displayRep(item.reputation)}
                                bronzeBadge={item.badge_counts.bronze}
                                silverBadge={item.badge_counts.silver}
                                goldBadge={item.badge_counts.gold}
                                website={item.website_url}
                                about={item.about_me}
                            />
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}

export default Users;