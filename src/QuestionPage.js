import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import './questionPage.css'
import DisplayReputation from './DisplayReputation';
import Answer from './Answer';

function QuestionPage() {
    let {questionId} = useParams();

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [data, setData] = useState({});

    const url = `https://api.stackexchange.com/2.2/questions/${questionId}?site=stackoverflow&filter=!IMtrxW)5mznbjA.Szm-Ccb1ppdMOnFW9TLEnzgsY1Z1xzCT&key=wud)gxqaQ5vssDmltw6d1A((`;

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

        now = `${thisDay}.${thisMonth}.${thisYear}`;

        if(isToday == now) {
            return `today`;
        }
        
        if(month == thisMonth) {
            if(thisDay - day == 2) {
                return `2 days ago`
            } else if(thisDay - day == 1) {
                return `yesterday`;
            }
        }
        
        return formattedDate;
    }


    if(error) {
        return <div>Error: {error.message}</div>;
    } else if(!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <>
                <div className="theQuestionBlock">
                    <div className="headOfBlock">
                        <h3>{data[0].title}</h3>
                        <div className="dates">asked: <span className="when">{formatDate(data[0].creation_date)}</span></div>
                    </div>

                    <div className="questionBody">
                        <div className="voting">
                            <img className="voteButton" src="https://img.icons8.com/ios-filled/100/ffffff/sort-up.png"/>
                            <p>{data[0].score}</p>
                            <img className="voteButton" src="https://img.icons8.com/ios-filled/100/ffffff/sort-down.png"/>
                            <img className="sideButton" src="https://img.icons8.com/ios-filled/150/ffffff/favorites.png"/>  
                            <img className="sideButton" src="https://img.icons8.com/fluent-systems-regular/96/ffffff/delivery-time.png"/>                     

                        </div>
                        <div className="questionText">
                            <div className="textOfQuestion" dangerouslySetInnerHTML={{__html: (data[0].body || '')}}></div>
                            <div className="tagsOfQuestion">
                                {data[0].tags.map(tag => (
                                    <div className="tagOfQuestion">{tag}</div>
                                ))}

                                <div className="ownerOfQuestionInfo">
                                    <img src={data[0].owner.profile_image} className="userOfQuestionPic" />
                                    <div className="genInfo">
                                        <span className="userOfQuestionName">{data[0].owner.display_name}</span>
                                        <span className="userOfQuestionRep">reputation: <DisplayReputation rep={data[0].owner.reputation} /></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='answers'>
                    <h2 className="numOfAnswers">{data[0].answers.length} {data[0].answers.length > 1 ? 'Answers' : 'Answer'}</h2>
                    {!data[0].answers ? '' : data[0].answers.map(answer => <Answer answer={answer} formatDate={formatDate} />)}
                </div>
            </>
        )
    }
}

export default QuestionPage;