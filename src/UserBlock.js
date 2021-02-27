import {  useState } from 'react';
import UserPreview from './UserPreview';
import UsersGeneralTags from './UsersGeneralTags';
import DisplayReputation from './DisplayReputation';

function UserBlock (props) {

    const [showPreview, setShowPreview] = useState(false);

    return (
        <div key={props.item.user_id} className="userBlock">
            <img src={props.item.profile_image} className="profileImage" onMouseOver={() => setShowPreview(true)} onMouseOut={() => setShowPreview(false)}></img>
            <div className="userInfo">
                <span className="userName">{props.item.display_name}</span>
                <span className="userLocation">{props.item.location}</span>
                <span className="repInfo">
                    <span className="reputation"> <DisplayReputation rep={props.item.reputation} /> </span>
                    
                </span>
                <span className="tags"><UsersGeneralTags id={props.item.user_id} /></span>

            </div>

            {showPreview ? <UserPreview item={props.item} /> : ''}
        </div>
    )
}

export default UserBlock;