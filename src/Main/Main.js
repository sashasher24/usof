import React, { useState } from 'react';

import Users from './Users/Users';
import Tags from './Tags/Tags';
import { Route, Routes } from 'react-router-dom'


import './main.css'
import SideBar from './SideBar';
import QuestionsSorting from './Questions/QuestionsSorting';
import UsersSorting from './Users/UsersSorting';
import TagsSorting from './Tags/TagsSorting';
import Questions from './Questions/Questions';
import QuestionPage from './Questions/QuestionPage';
import UserPage from './Users/UserPage';

function Main(props) {

    const [order, setOrder] = useState('');
    const [sortBy, setSortBy] = useState();

    const [tag, setTag] = useState();
    console.log('key:' + process.env.REACT_APP_API_KEY);
    let token = props.token;

    function changeTag (tag){
        setTag(tag);
    }

    console.log('change tag is ' + changeTag)

    const setSortOrder = (order, sortBy) => {
        setOrder(order);
        setSortBy(sortBy);
    }

    console.log(`order in parent is ${order} and sort by ${sortBy}`);

    return(
        <main>
            <div id="sideBar">
                <SideBar setSortOrder={setSortOrder} changeTag={changeTag} />
            </div>
            <div id="mainField">
                <div className="sortingOptions">
                    <Routes>
                        <Route exact path="/questions" element={<QuestionsSorting setSortOrder={setSortOrder} />}/>
                        <Route exact path="/users" element={<UsersSorting setSortOrder={setSortOrder} />}/>
                        <Route path="/tags" render={<TagsSorting setSortOrder={setSortOrder} />}/>
                    </Routes>
                </div>
                <div>
                    <Routes>
                        <Route exact path="/questions" element={<Questions sortOrder={order} sortBy={sortBy} changeTag={changeTag} tag={tag}/>}/>
                        <Route exact path="/users" element={<Users sortOrder={order} sortBy={sortBy} />}/>
                        <Route path="/tags" element={<Tags sortOrder={order} sortBy={sortBy} changeTag={changeTag} />} />
                        <Route path='/questions/:questionId' element={<QuestionPage token={token} changeTag={changeTag}/>} />
                        <Route path='/users/:userId' element={<UserPage />}/>
                    </Routes>
                </div>
            </div>
        </main>
    )
}

export default Main;