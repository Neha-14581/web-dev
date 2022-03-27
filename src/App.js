import './App.css';
import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import HelloWorld from "./components/hello-world";
import Labs from "./components/a6/labs/index";
import Build from "./components/tuiter/index";
import HomeScreen from "./components/tuiter/HomeScreen/HomeScreen"
import {BrowserRouter, Route, Routes}
    from "react-router-dom";
import ExploreScreen from "./components/tuiter/ExploreScreen/ExploreScreen";

function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <Routes>
                    <Route path="/hello"
                           exact={true}
                           element={<HelloWorld/>}/>
                    <Route path="/"
                           element={<Labs/>}/>
                    <Route path="/tuiter"
                           element={<Build/>}/>
                    <Route path="/tuiter/home" element={<HomeScreen/>}/>
                    <Route path="/tuiter/explore" element={<ExploreScreen/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;


