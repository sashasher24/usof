import {  useState,  useEffect } from 'react';
import { Link } from 'react-router-dom';
// import axios from 'axios';

import './questions.css';
import FormatDate from '../../FormatDate';

function Questions(props) {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [data, setData] = useState({});

    const [sortingState, setSortingState] = useState({sortOrder: '', sortBy: ''});

    console.log('change tag is ' + props.changeTag)

    useEffect(() => {
        setSortingState(props);
        props.changeTag(props.tag);
    }, [props]);

    console.log(props.tag);
    let url;

    if(props.tag) {
        url = `https://api.stackexchange.com/2.2/search?${sortingState.sortOrder ? `order=${sortingState.sortOrder}&sort=${sortingState.sortBy}&` : ''}tagged=${props.tag}&site=stackoverflow&key=${process.env.REACT_APP_API_KEY}`;
    } 
    else url = `https://api.stackexchange.com/2.2/questions?${sortingState.sortOrder ? `order=${sortingState.sortOrder}&sort=${sortingState.sortBy}&` : ''}site=stackoverflow&key=${process.env.REACT_APP_API_KEY}`;

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
    }, [sortingState, props.tag]);
    
    console.log(data);

    // console.log(data);

    if(error) {
        return <div>Error: {error.message}</div>;
    } else if(!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <>
                {data.map(item => (
                    <div key={item.question_id} className="questionBlock">
                        <div className="numbersInfoOfQuest">
                            <div className="votes">
                                {item.score}
                                <p>votes</p>
                            </div>
                            <div className={item.answer_count > 0 ? item.is_answered ? `answers hasAcceptedAnswer` : `answers answered` : `answers`}>
                                {item.answer_count}
                                <p>answers</p>
                            </div>
                            <div className="views">
                                {item.view_count}
                                <p>views</p>
                            </div>
                        </div>
                        <div className="theQuestion">
                            <div className="questionTitle">
                                <Link to={`/questions/${item.question_id}`} >{item.title}</Link>
                            </div>
                            <div className="tags">
                                {item.tags.map(tag => (
                                    <div className="tag" key={tag} onClick={() => props.changeTag(tag)}>
                                        {tag}
                                    </div>
                                ))}

                                <div className="ownerInfo">
                                    <span className="questionDate"> asked <FormatDate date={item.creation_date} /> by </span>
                                    <Link to={`/users/${item.owner.user_id}`}>
                                        <span className="questionOwner"> {item.owner.display_name} </span>
                                    </Link>
                                    <span className="questionOwnerRep"> {item.owner.reputation} </span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </>
        )
    }
}

export default Questions;