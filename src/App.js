import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import {BrowserRouter, Route, Routes}
    from "react-router-dom";
import './components/tuiter/explore.css'
import './components/tuiter/home.css'
import './components/tuiter/profile.css'
import HomeScreen from "./components/tuiter/HomeScreen";
import ExploreScreen from "./components/tuiter/ExploreScreen/ExploreComponent";
import ProfileScreen from "./components/tuiter/ProfileScreen";
import Tuiter from "./components/tuiter";
import EditProfileScreen from "./components/tuiter/EditProfile";

function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <Routes>
                    <Route path="/" element={<Tuiter/>}>
                        <Route index
                               element={<HomeScreen/>}/>
                        <Route path="explore"
                               element={<ExploreScreen/>}/>
                        <Route path="profile"
                               element={<ProfileScreen/>}/>
                        <Route path="edit-profile"
                               element={<EditProfileScreen/>}/>

                    </Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
