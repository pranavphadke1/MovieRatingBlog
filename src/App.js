import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import HelloWorld from "./components/hello-world";
import Labs from "./components/labs";
import {BrowserRouter, Route, Routes}
    from "react-router-dom";
import './components/tuiter/explore.css'
import './components/tuiter/home.css'
import HomeScreen from "./components/tuiter/HomeScreen/HomeScreen";
import ExploreScreen from "./components/tuiter/ExploreScreen/ExploreScreen";

function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <Routes>
                    <Route path="/tuiter/home" element={<HomeScreen/>}/>
                    <Route path="/tuiter/explore" element={<ExploreScreen/>}/>

                    <Route path="/hello"
                           exact={true}
                           element={<HelloWorld/>}/>
                    <Route path="/"
                           exact={true}
                           element={<Labs/>}/>

                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
