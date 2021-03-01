import {  useState,  useEffect } from 'react';
import TagsDescription from './TagsDescription';

import './tags.css'
import { Link } from 'react-router-dom';

function Tags(props) {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [data, setData] = useState({});

    const [sortingState, setSortingState] = useState({sortOrder: '', sortBy: ''});

    useEffect(() => {
        setSortingState(props);
    }, [props]);

    const url = `https://api.stackexchange.com/2.2/tags?${sortingState.sortOrder ? `order=${sortingState.sortOrder}&sort=${sortingState.sortBy}&` : ''}site=stackoverflow&filter=!9_bDDqt9p&key=wud)gxqaQ5vssDmltw6d1A((`;
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
        return <div>Loading tags ...</div>;
    } else {
        return (
            <div className='container'>
                {data.map(item => (
                    <div className="tagBlock">
                        <Link to="/"><p className="tagName" onClick={() => props.changeTag(item.name)}>{item.name}</p></Link>
                        <TagsDescription name={decodeURIComponent(item.name)} />
                        <p className="numOfQuestions">{item.count} questions</p>
                    </div>
                ))}
            </div>
        )
    }
}

export default Tags;