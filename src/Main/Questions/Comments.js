import './comments.css'
import { Link } from 'react-router-dom';

function Comments(props) {
    
    return(
        <>
            {props.comments.map(comment => (
                <div className="comment" key={comment.comment_id}>
                    <span dangerouslySetInnerHTML={{__html: (comment.body || '')}} />
                    -
                    <Link to={`users/${comment.owner.user_id}`}><span className="authorName">{comment.owner.display_name}</span></Link>
                    <span className="commentDate">{props.formatDate(comment.creation_date)}</span>
                </div>
            ))}
        </>
    )
}

export default Comments;