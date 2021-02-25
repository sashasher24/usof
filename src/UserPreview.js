import {  useState,  useEffect } from 'react';

function UserPreview(props) {

    if(error) {
        return <div>Error: {error.message}</div>;
    } else if(!isLoaded) {
        return <div>Loading users ...</div>;
    } else {
        return (
                // {data.map(item => (
                //     <div key={item.user_id} className="userBlock">
                //         <img src={item.profile_image} className="profileImage"></img>
                //         <div className="userInfo">
                //             <span className="userName">{item.display_name}</span>
                //             <span className="userLocation">{item.location}</span>
                //             <span className="repInfo">
                //                 <span className="reputation"> {displayRep(item.reputation)} </span>
                //                 {/* <span className="bronze"> b {item.badge_counts.bronze} </span>
                //                 <span className="silver"> s {item.badge_counts.silver} </span>
                //                 <span className="gold"> g{item.badge_counts.gold} </span> */}
                //             </span>
                //             <span className="tags"><UsersGeneralTags id={item.user_id} /></span>

                //         </div>
                //     </div>
                // ))}
        )
    }
}

export default UserPreview;