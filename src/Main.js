import StartPage from './StartPage';
import Users from './Users';
import Tags from './Tags';
import { Route } from 'react-router-dom'

import './main.css'

function Main() {
    return(
        <main>
            <div id="sideBar">
                Sorting
            </div>
            <div id="mainField">
                <Route exact path="/" component={StartPage}/>
                <Route exact path="/users" component={Users}/>
                <Route path="/tags" component={Tags} />
            </div>
        </main>
    )
}

export default Main;