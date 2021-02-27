import React, { useState } from 'react';

import Users from './Users';
import Tags from './Tags';
import { Route } from 'react-router-dom'


import './main.css'
import SideBar from './SideBar';
import QuestionsSorting from './QuestionsSorting';
import UsersSorting from './UsersSorting';
import TagsSorting from './TagsSorting';
import Questions from './Questions';
import QuestionPage from './QuestionPage';

function Main() {

    const [order, setOrder] = useState('');
    const [sortBy, setSortBy] = useState();

    const setSortOrder = (order, sortBy) => {
        setOrder(order);
        setSortBy(sortBy);
    }

    console.log(`order in parent is ${order} and sort by ${sortBy}`);

    return(
        <main>
            <div id="sideBar">
                <SideBar setSortOrder={setSortOrder}/>
            </div>
            <div id="mainField">
                <div className="sortingOptions">
                    <Route exact path="/" render={(props) => (<QuestionsSorting {...props} setSortOrder={setSortOrder} />)}/>
                    <Route exact path="/users" render={(props) => (<UsersSorting {...props} setSortOrder={setSortOrder} />)}/>
                    <Route path="/tags" render={(props) => (<TagsSorting {...props} setSortOrder={setSortOrder} />)} />
                </div>
                <div>
                    <Route exact path="/" render={props => (<Questions {...props} sortOrder={order} sortBy={sortBy} />)}/>
                    <Route exact path="/users" render={props => (<Users {...props} sortOrder={order} sortBy={sortBy} />)}/>
                    <Route path="/tags" render={props => (<Tags {...props} sortOrder={order} sortBy={sortBy}/>)} />
                    <Route path='/:questionId' component={QuestionPage} /> 
                </div>
            </div>
        </main>
    )
}

export default Main;