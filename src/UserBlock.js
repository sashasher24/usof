import {  useState } from 'react';
import UserPreview from './UserPreview';
import UsersGeneralTags from './UsersGeneralTags';
import DisplayReputation from './DisplayReputation';
import { Link } from 'react-router-dom';

function UserBlock (props) {

    const [showPreview, setShowPreview] = useState(false);

    return (
        <div key={props.item.user_id} className="userBlock">
            <Link to={`users/${props.item.user_id}`}><img src={props.item.profile_image} alt="user" className="profileImage" onMouseOver={() => setShowPreview(true)} onMouseOut={() => setShowPreview(false)} /> </Link>
            <div className="userInfo">
                <Link to={`users/${props.item.user_id}`}><span className="userName">{props.item.display_name}</span></Link>
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