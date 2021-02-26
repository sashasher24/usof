import {  useState } from 'react';
import UserPreview from './UserPreview';
import UsersGeneralTags from './UsersGeneralTags';

function UserBlock (props) {

    const [showPreview, setShowPreview] = useState(false);

    const displayRep = rep => {
        if(rep > 1000000) {
            rep = Math.floor(rep/1000000) + Number(((rep % 1000000)*0.000001).toFixed(1));
            return `${rep}m`;
        } else if(rep > 1000) {
            rep = Math.floor(rep/1000) + Number(((rep % 1000)*0.001).toFixed(1));
            return `${rep}k`
        } else return `${rep}`;
    }

    return (
        <div key={props.item.user_id} className="userBlock">
            <img src={props.item.profile_image} className="profileImage" onMouseOver={() => setShowPreview(true)} onMouseOut={() => setShowPreview(false)}></img>
            <div className="userInfo">
                <span className="userName">{props.item.display_name}</span>
                <span className="userLocation">{props.item.location}</span>
                <span className="repInfo">
                    <span className="reputation"> {displayRep(props.item.reputation)} </span>
                    
                </span>
                <span className="tags"><UsersGeneralTags id={props.item.user_id} /></span>

            </div>

            {showPreview ? <UserPreview item={props.item} /> : ''}
        </div>
    )
}

export default UserBlock;