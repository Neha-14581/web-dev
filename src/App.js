
import React from "react";
import './App.css';
import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import HelloWorld from "./components/hello-world.js";
import LabsA7 from "./components/a7/labs/index.js"
import HomeScreen from "./components/tuiter/HomeScreen/index.js"
import {BrowserRouter, Route, Routes}
    from "react-router-dom";
import ExploreScreen from "./components/tuiter/ExploreScreen/ExploreScreen.js";
import Build from "./components/tuiter/index.js";
import ProfilePage from "./components/tuiter/ProfileScreen/ProfilePage.js";

function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <Routes>
                    <Route path="/">
                        <Route index element={<LabsA7/>}/>
                        <Route path="labs"
                               element={<LabsA7/>}/>
                        <Route path="hello"
                               element={<HelloWorld/>}/>
                        <Route path="tuiter"
                               element={<Build/>}>
                            <Route index
                                   element={<HomeScreen/>}/>
                            <Route path="explore"
                                   element={<ExploreScreen/>}/>
                            <Route path="profile"
                                   element={<ProfilePage/>}/>
                        </Route>
                    </Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}
export default App;