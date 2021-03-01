import '../../sorting.css'

function UsersSorting(props) {
    
    return (
        <div className="sorting">
            <span className="sortby">Sort by: </span>
            <div className="byRep sortOption">
                <p className="sortName">by reputation</p>
                <p className="sortOrder">
                    <span className="asc" onClick={() => {props.setSortOrder('asc', 'reputation')}}>asc</span>
                    <span className="desc" onClick={() => {props.setSortOrder('desc', 'reputation')}}>desc</span>
                </p>
            </div>
            <div className="byDate sortOption">
                <p className="sortName">by creation date</p>
                <p className="sortOrder">
                    <span className="asc" onClick={() => {props.setSortOrder('asc', 'creation')}}>asc</span>
                    <span className="desc" onClick={() => {props.setSortOrder('desc', 'creation')}}>desc</span>
                </p>
            </div>
            <div className="byName sortOption">
                <p className="sortName">by name</p>
                <p className="sortOrder">
                    <span className="asc" onClick={() => {props.setSortOrder('asc', 'name')}}>asc</span>
                    <span className="desc" onClick={() => {props.setSortOrder('desc', 'name')}}>desc</span>
                </p>
            </div>
        </div>
    )
}

export default UsersSorting;