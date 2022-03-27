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
