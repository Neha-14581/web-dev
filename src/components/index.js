import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import Build from "/tuiter/index";
import HelloWorld from "./hello-world";
import Labs from "./a6/labs/index";
import ExploreScreen from "./tuiter/ExploreScreen/ExploreScreen";
import HomeScreen from "./tuiter/HomeScreen/HomeScreen";

const A6 = () => {
    return(
        <BrowserRouter>
            <div className="container">
                <Route path="/hello"exact={true}>
                    <HelloWorld/>
                </Route>
                <Route path="/a6/build" exact={true}>
                    <Build/>
                </Route>
                <Route path={["/", "/a6", "/a6/practice"]} exact={true}>
                    <Labs/>
                </Route>
                <Route path="/tuiter/explore" component={ExploreScreen}/>
                <Route path="/tuiter/home" component={HomeScreen}/>
            </div>
        </BrowserRouter>
    )
}

export default A6;