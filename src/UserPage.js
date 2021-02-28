import { useParams, Route, NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import FormatDate from './FormatDate';

import './userPage.css'
import UserPosts from './UserPosts';



function UserPage() {
    let {userId} = useParams();

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [data, setData] = useState({});

    const [type, setType] = useState('posts');

    let url = `https://api.stackexchange.com/2.2/users/${userId}?site=stackoverflow&key=wud)gxqaQ5vssDmltw6d1A((&filter=!9_bDDp)d5`;

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
        return <div>Loading...</div>;
    } else {
        return (
            <div className="userPage">
                <div className="mainUserPageInfo">
                    <div className="userPicandInfo">
                        <img src={data[0].profile_image} alt="user" />
                        <p className="userPageRep">{data[0].reputation} reputation</p>
                        <p className="userPageBadgesInfo">
                            <span className="bronzeBadge"> {data[0].badge_counts.bronze}</span>
                            <span className="silverBadge"> {data[0].badge_counts.silver}</span>
                            <span className="goldBadge"> {data[0].badge_counts.gold}</span>
                        </p>
                    </div>

                    <div className="userPageGenInfo">
                        <p className="userPageUserName">{data[0].display_name}</p>
                        <p className="userPageAboutUser" dangerouslySetInnerHTML={{__html: (data[0].about_me || '')}} />
                    </div>

                    <div className="userPageUserProfInfo">
                        <p className="userPageLocation">Location: {data[0].location}</p>
                        <p className="userPageWebsite">Website: <a href={data[0].website_url}>{data[0].website_url}</a></p>
                        <p className="userLastActive">active <FormatDate date={data[0].last_access_date} /></p>
                    </div>

                </div>

                <nav className="userPageNav">
                    <li onClick={() => setType('posts')}> Posts </li >
                    <li onClick={() => setType('questions')}> Questions </li>
                    <li onClick={() => setType('answers')}> Answers </li>
                    <li onClick={() => setType('coments')}> Comments </li>
                </nav>

                <div className="userStats">
                    <UserPosts type={type} userId={userId} />
                    {/* <Route path="/users/:userId/posts" render={props => (<UserPosts {...props} />)} />
                    <Route path="/users/:userId/questions" component={UserQuestions} />
                    <Route path="/users/:userId/answers"component={UserAnswers} /> */}
                </div>
            </div>
        )
    }
}

export default UserPage;