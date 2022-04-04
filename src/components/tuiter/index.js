/*
import React from "react";
import ExploreScreen from "./ExploreScreen/ExploreScreen";
import {Link} from "react-router-dom";

const Build = () => {
    return(
        <>
            <ExploreScreen/>
            <Link to="/hello">
                Hello
            </Link> |
            <Link to="/">
                Labs
            </Link>
        </>
    )
};
export default Build;

import React from "react";
import {Outlet} from "react-router-dom";
import NavigationSidebar from "./NavigationSidebar";
import "./tuiter.css";

const Tuiter = () => {
    return (
        <div className="row mt-2">
            <div className="col-2 col-lg-1 col-xl-2">
                <NavigationSidebar/>
            </div>
            <div className="col-10 col-lg-7 col-xl-6">
                <Outlet/>
            </div>
            <div className="d-none d-lg-block col-lg-4 col-xl-4">
                <h2>Who to follow</h2>
            </div>
        </div>
    );
};
export default Tuiter;

 */


import React from "react";
import ExploreScreen from "./ExploreScreen/ExploreScreen";
import {Route} from "react-router-dom";
import HomeScreen from "./HomeScreen/index";
import who from "./reducers/who-reducer";
import tweets from "./reducers/tweets";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import ProfileScreen from "./ProfileScreen/index";
import profile from "./reducers/profile";
import EditPage from "./EditProfile/index";
import {Outlet} from "react-router-dom"

const reducer = combineReducers({tweets: tweets, who, profile})

const store = createStore(reducer);


const Build = () => {
    return(
        <Provider store={store}>
                <Outlet/>
        </Provider>
    );
};
export default Build;