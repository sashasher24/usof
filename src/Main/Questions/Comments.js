import './comments.css'

function Comments(props) {
    
    return(
        <>
            {props.comments.map(comment => (
                <div className="comment" key={comment.comment_id}>
                    <span dangerouslySetInnerHTML={{__html: (comment.body || '')}} />
                    -
                    <span className="authorName">{comment.owner.display_name}</span>
                    <span className="commentDate">{props.formatDate(comment.creation_date)}</span>
                </div>
            ))}
        </>
    )
}

export default Comments;