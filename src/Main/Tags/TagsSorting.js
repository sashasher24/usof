import '../../sorting.css'

function TagsSorting(props) {
    
    return (
        <div className="sorting">
            <span className="sortby">Sort by: </span>
            <div className="byPopularity sortOption">
                <p className="sortName">by popularity</p>
                <p className="sortOrder">
                    <span className="asc" onClick={() => {props.setSortOrder('asc', 'popular')}}>asc</span>
                    <span className="desc" onClick={() => {props.setSortOrder('desc', 'popular')}}>desc</span>
                </p>
            </div>
            <div className="byActivity sortOption">
                <p className="sortName">by activity</p>
                <p className="sortOrder">
                    <span className="asc" onClick={() => {props.setSortOrder('asc', 'activity')}}>asc</span>
                    <span className="desc" onClick={() => {props.setSortOrder('desc', 'activity')}}>desc</span>
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

export default TagsSorting;