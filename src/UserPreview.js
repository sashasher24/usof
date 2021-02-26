// import {  useState,  useEffect } from 'react';

function UserPreview(props) {

    const displayText = () => {
        let maxLength = 400;
        let result = props.item.about_me.substring(0, maxLength).trim() + '...';
        return result;
    }

    console.log('preview');

    return (
        <div className="userPreviewBlock">
            <div className="userPreview">
                <div className="generalInfoPreview">
                    <div className="userInfoPreview">
                        <span className="userNamePreview">{props.item.display_name}</span>
                        <span className="userLocationPreview">{props.item.location}</span>

                        <span className="repInfoPreview">
                            <span className="reputationPreview"> {props.item.reputation} </span>    
                            <span className="bronze"> b {props.item.badge_counts.bronze} </span>
                            <span className="silver"> s {props.item.badge_counts.silver} </span>
                            <span className="gold"> g {props.item.badge_counts.gold} </span>
                        </span>

                        <span className="websitePreview">{props.item.website_url}</span>
                    </div>
                </div>
                <div className="aboutPreview" dangerouslySetInnerHTML={{__html: (displayText() || '')}}>
                </div>
            </div>
        </div>
            
    )
}

export default UserPreview;