import { useState, useEffect } from 'react';

import './usersGeneralTags.css'

function UsersGeneralTags(props) {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [data, setData] = useState({});

    const url = `https://api.stackexchange.com/2.2/users/${props.id}/top-tags?site=stackoverflow&key=${process.env.REACT_APP_API_KEY}`;
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

    if(error) {
        return <div>Error: {error.message}</div>;
    } else if(!isLoaded) {
        return <div>Loading tags ...</div>;
    } else {
        return (
            <>
                {data.slice(0, 3).map(item => (
                    <span className="userTag">{item.tag_name}</span>
                ))}
            </>
        )
    }
}

export default UsersGeneralTags;