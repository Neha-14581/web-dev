import React from "react";
import who from "./reducers/who-reducer";
import tweets from "./reducers/tweets";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import profile from "./reducers/profile";
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