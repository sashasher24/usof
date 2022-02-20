import { useState, useEffect } from 'react';
import FormatDate from '../../FormatDate';
import { Link } from 'react-router-dom';

function UserPosts(props) {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [data, setData] = useState({});

    const displayText = (about) => {
        let maxLength = 150;
        let result = about.substring(0, maxLength).trim();
        return result;
    }

    let url;

    if (props.type === 'posts') {
        url = `https://api.stackexchange.com/2.2/users/${props.userId}/posts?site=stackoverflow&filter=!LH22N3W(ohE.oBUhc1Z_jP&key=${process.env.REACT_APP_API_KEY}`;
    } else if (props.type === 'questions') {
        url = `https://api.stackexchange.com/2.2/users/${props.userId}/questions?site=stackoverflow&filter=!-MOiN_e9RRw)PrRV4)m9autDpK1W-y)25&key=${process.env.REACT_APP_API_KEY}`;
    } else if (props.type === 'answers') {
        url = `https://api.stackexchange.com/2.2/users/${props.userId}/answers?site=stackoverflow&filter=!)Q29mwsOXXJGPIa)BWJ5Yi3H&key=${process.env.REACT_APP_API_KEY}`;
    } else {
        url = `https://api.stackexchange.com/2.2/users/${props.userId}/comments?site=stackoverflow&filter=!SWJ_aFhOX4jJ4Lt8gw&key=${process.env.REACT_APP_API_KEY}`;
    }

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
    }, [props.type]);

    let i = 0;

    console.log(data[0]);

    if(error) {
        return <div>Error: {error.message}</div>;
    } else if(!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <>
                {data.map(item => (
                    <div className="userPagePost" key={i++}>
                        {props.type === 'posts' || props.type === 'questions' ? 
                            item.question_id ?
                                <Link to={`/questions/${item.question_id}`}>
                                    <p className="userPost">{item.title}</p>
                                </Link>
                                    :
                                <p className="userPost">{item.title}</p>
                            : item.body ?
                                item.question_id ?
                                <Link to={`/questions/${item.question_id}`}>
                                    <p className="userPost" dangerouslySetInnerHTML={{__html: (displayText(item.body) || '')}} />
                                </Link>
                                    :
                                <p className="userPost" dangerouslySetInnerHTML={{__html: (displayText(item.body) || '')}} />
                            : ''}
                        <p className="userPostDate"><FormatDate date={item.creation_date} /></p>
                    </div>
                ))}
            </>
        )
            // }
    }
}

export default UserPosts;