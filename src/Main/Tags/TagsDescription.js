import {  useState,  useEffect } from 'react';

// import './usersGeneralTags.css'

function TagsDescription(props) {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [data, setData] = useState({});

    const url = `https://api.stackexchange.com/2.2/tags/${encodeURIComponent(props.name)}/wikis?site=stackoverflow&key=wud)gxqaQ5vssDmltw6d1A((`;
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

    const displayText = text => {
        let maxLength = 140;
        let result = text.substring(0, maxLength) + '...';
        return result;
    }

    if(error) {
        return <div>Error: {error.message}</div>;
    } else if(!isLoaded) {
        return <div>Loading tags ...</div>;
    } else {
        return (
            <>
                <p className="tagDescription">{displayText(data[0].excerpt)}</p>
            </>
        )
    }
}

export default TagsDescription;