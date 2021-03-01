import DisplayReputation from "./DisplayReputation";

import './answer.css'
import Comments from "./Comments";

function Answer (props) {

    return (
        <div className="answerBlock" key={props.id}>
            <div className="answerBody">
                <div className="voting">
                    <img className="voteButton" src="https://img.icons8.com/ios-filled/100/ffffff/sort-up.png" alt="vote up" onClick={() => props.token ? alert('your answer is accepted but isn`t counted as your reputation is too low') : alert("Log In first")} />
                    <p>{props.answer.score}</p>
                    <img className="voteButton" src="https://img.icons8.com/ios-filled/100/ffffff/sort-down.png" alt="vote down" onClick={() => props.token ? alert('your answer is accepted but isn`t counted as your reputation is too low') : alert("Log In first")} />
                    <img className={props.answer.is_accepted ? 'accepted' : 'notAccepted'} src="https://img.icons8.com/fluent/144/26e07f/checkmark.png" alt="accepted" />
                    <img className="sideButton" src="https://img.icons8.com/fluent-systems-regular/96/ffffff/delivery-time.png" alt="see history" />                     

                </div>
                <div className="answerText">
                    <div className="textOfAnswer" dangerouslySetInnerHTML={{__html: (props.answer.body || '')}}></div>
                        <div className="ownerOfAnswerInfo">
                            <span className="dateOfAnswer">answered {props.formatDate(props.answer.creation_date)}</span>
                            
                            <div className="moreOwnerInfo">
                                <img src={props.answer.owner.profile_image} className="userOfAnswerPic" alt="user" />
                                <div className="genInfo">
                                    <span className="userOfAnswerName">{props.answer.owner.display_name}</span>
                                    <span className="userOfAnswerRep">reputation: <DisplayReputation rep={props.answer.owner.reputation} /></span>
                                </div>
                            </div>
                        </div>

                        <div className='comments'>
                            {props.answer.comment_count > 0 ? <Comments comments={props.answer.comments} formatDate={props.formatDate} /> : ''}
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Answer;