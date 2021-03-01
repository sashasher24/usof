import '../../sorting.css'

function QuestionsSorting(props) {


    return (
        <div className="sorting">
            <span className="sortby">Sort by: </span>
            <div className="byActivity sortOption">
                <p className="sortName">by activity</p>
                <p className="sortOrder">
                    <span className="asc" onClick={() => {props.setSortOrder('asc', 'activity')}}>asc</span>
                    <span className="desc" onClick={() => {props.setSortOrder('desc', 'activity')}}>desc</span>
                </p>
            </div>
            <div className="byVotes sortOption">
                <p className="sortName">by votes</p>
                <p className="sortOrder">
                <span className="asc" onClick={() => {props.setSortOrder('asc', 'votes')}}>asc</span>
                <span className="desc" onClick={() => {props.setSortOrder('desc', 'votes')}}>desc</span>
                </p>
            </div>
            <div className="byCreation sortOption">
                <p className="sortName">by creation</p>
                <p className="sortOrder">
                    <span className="asc" onClick={() => {props.setSortOrder('asc', 'creation')}}>asc</span>
                    <span className="desc" onClick={() => {props.setSortOrder('desc', 'creation')}}>desc</span>
                </p>
            </div>
        </div>
    )
}

export default QuestionsSorting;