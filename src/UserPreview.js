// import {  useState,  useEffect } from 'react';

function UserPreview(props) {

    const displayText = () => {
        let maxLength = 400;
        let result = props.about.substring(0, maxLength) + '...';
        return result;
    }

    return (
        <div className="userPreview">
            <div className="generalInfoPreview">
                <img src={props.image} alt="user pic" className="previewImage" />
                <div className="userInfoPreview">
                    <span className="userNamePreview">{props.name}</span>
                    <span className="userLocationPreview">{props.location}</span>

                    <span className="repInfoPreview">
                        <span className="reputationPreview"> {props.reputation} </span>    
                        <span className="bronze"> b {props.bronzeBadge} </span>
                        <span className="silver"> s {props.silverBadge} </span>
                        <span className="gold"> g {props.goldBadge} </span>
                    </span>

                    <span className="websitePreview">{props.website}</span>
                </div>
            </div>
            <div className="aboutPreview" dangerouslySetInnerHTML={{__html: (displayText() || '')}}>
                {/* {props.about} */}
            </div>
        </div>
            
    )
}

export default UserPreview;