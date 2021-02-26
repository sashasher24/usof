import {  useState,  useEffect } from 'react';
// import axios from 'axios';

import './questions.css';

function Questions(props) {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [data, setData] = useState({});

    const [sortingState, setSortingState] = useState({sortOrder: '', sortBy: ''});

    useEffect(() => {
        setSortingState(props);
    }, [props]);

    // console.log(sortingState.sortOrder)

    // console.log(props.sortOrder);
    // console.log(props.sortBy)

    const url = `https://api.stackexchange.com/2.2/questions?${sortingState.sortOrder ? `order=${sortingState.sortOrder}&sort=${sortingState.sortBy}&` : ''}site=stackoverflow&key=wud)gxqaQ5vssDmltw6d1A((`;

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

    const formatDate = (date) => {
        let formattedDate = new Date(date * 1000);
        let day = formattedDate.getDate();
        if (day < 10) day = '0' + day;
        let month = formattedDate.getMonth() + 1;
        if (month < 10) month = '0' + month;
        let year = formattedDate.getFullYear();
        let hours = formattedDate.getHours();
        if (hours < 10) hours = '0' + hours;
        let minutes = formattedDate.getMinutes();
        if (minutes < 10) minutes = '0' + minutes;
        let displayMonth = formattedDate.toLocaleString('en', { month: 'short' });

        formattedDate = `${displayMonth} ${day} ${year} at ${hours}:${minutes}`;
        let isToday = `${day}.${month}.${year}`;

        let now = new Date();

        let thisDay = now.getDate();
        if (thisDay < 10) thisDay = '0' + thisDay;
        let thisMonth = now.getMonth() + 1;
        if (thisMonth < 10) thisMonth = '0' + thisMonth;
        let thisYear = now.getFullYear();
        let thisHours = now.getHours();
        if (thisHours < 10) thisHours = '0' + thisHours;
        let thisMinutes = now.getMinutes();
        if (thisMinutes < 10) thisMinutes = '0' + thisMinutes;
        // let weekday = formattedDate.toLocaleString('en', { weekday: 'long' });

        now = `${thisDay}.${thisMonth}.${thisYear}`;

        if(isToday == now) {
            let nowTime = thisMinutes + thisHours * 60;
            let dateOfQuestion = minutes + hours * 60;
            let toDisplay = nowTime - dateOfQuestion;
            if(toDisplay < 60) {
                if(toDisplay < 1) {
                    return `just now`;
                } else return `${toDisplay} min ago`
            }
            else if (toDisplay / 60 < 24){
                if((toDisplay / 60).toFixed(0) == 1) {
                    return `${(toDisplay / 60).toFixed(0)} hour ago`;
                }
                else return `${(toDisplay / 60).toFixed(0)} hours ago`;
            } 
        }
        
        if(month == thisMonth) {
            if(thisDay - day == 2) {
                return `2 days ago`
            } else if(thisDay - day == 1) {
                return `yeaterday`;
            }
        }
        
        return formattedDate;
    }

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
                    <div className="theQuestion">
                        <div className="questionTitle">
                            {item.title}
                        </div>
                        <div className="tags">
                            {item.tags.map(tag => (
                                <div className="tag" key={tag}>
                                    {tag}
                                </div>
                            ))}

                            <div className="ownerInfo">
                                <span className="questionDate"> asked {formatDate(item.creation_date)} by </span>
                                <span className="questionOwner"> {item.owner.display_name} </span>
                                <span className="questionOwnerRep"> {item.owner.reputation} </span>
                            </div>
                        </div>
                    </div>
                    {/* <p>{item.title}</p> */}
                </div>
            ))}
            {/* <h1>ygdhf</h1> */}
            </>
        )
    }
}

export default Questions;