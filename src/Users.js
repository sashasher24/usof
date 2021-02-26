import {  useState,  useEffect } from 'react';

import './users.css'
import UserBlock from './UserBlock';

function Users(props) {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [data, setData] = useState({});

    const [sortingState, setSortingState] = useState({sortOrder: '', sortBy: ''});

    useEffect(() => {
        setSortingState(props);
    }, [props]);

    const url = `https://api.stackexchange.com/2.2/users?${sortingState.sortOrder ? `order=${sortingState.sortOrder}&sort=${sortingState.sortBy}&` : ''}site=stackoverflow&filter=!9_bDDp)d5&key=wud)gxqaQ5vssDmltw6d1A((`;
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
    }, [sortingState]);

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
                        <UserBlock item={item} />
                    </div>
                ))}
            </div>
        )
    }
}

export default Users;