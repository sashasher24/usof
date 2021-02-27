import DisplayReputation from "./DisplayReputation";

import './answer.css'

function Answer (props) {



    return (
        <div className="answerBlock">
            <div className="answerBody">
                <div className="voting">
                    <img className="voteButton" src="https://img.icons8.com/ios-filled/100/ffffff/sort-up.png"/>
                    <p>{props.answer.score}</p>
                    <img className="voteButton" src="https://img.icons8.com/ios-filled/100/ffffff/sort-down.png"/>
                    <img className={props.answer.is_accepted ? 'accepted' : 'notAccepted'} src="https://img.icons8.com/fluent/144/26e07f/checkmark.png"/>
                    <img className="sideButton" src="https://img.icons8.com/fluent-systems-regular/96/ffffff/delivery-time.png"/>                     

                </div>
                <div className="answerText">
                    <div className="textOfAnswer" dangerouslySetInnerHTML={{__html: (props.answer.body || '')}}></div>
                        <div className="ownerOfAnswerInfo">
                            <span className="dateOfAnswer">answered {props.formatDate(props.answer.creation_date)}</span>
                            
                            <div className="moreOwnerInfo">
                                <img src={props.answer.owner.profile_image} className="userOfAnswerPic" />
                                <div className="genInfo">
                                    <span className="userOfAnswerName">{props.answer.owner.display_name}</span>
                                    <span className="userOfAnswerRep">reputation: <DisplayReputation rep={props.answer.owner.reputation} /></span>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Answer;