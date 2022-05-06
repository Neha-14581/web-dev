
import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Build from "./tuiter/index";
import LabsA7 from "./a7/labs";

const A7 = () => {
    return(
        <BrowserRouter>
            <div className="container">
                <Routes>
                    <Route path={["/", "/a7", "/a7/labs"]} exact={true}>
                        <LabsA7/>
                    </Route>
                    <Route path="/tuiter">
                        <Build/>
                    </Route>
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default A7;