import React from "react";
import NavigationSidebar from "../NavigationSidebar";
import WhoToFollowList from "../WhoToFollowList";
import ExploreComponent from "./ExploreComponent";
import {Link} from "react-router-dom";

const ExploreScreen = () => {
    return (<>
        <div className="row mt-2 flex-nowrap">
            <div className="col-xxl-2 col-xl-2 col-lg-1 col-md-2 col-sm-3 col-3">
                <NavigationSidebar active="explore"/>
            </div>
            <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-10 col-sm-9 col-8"
                 style={{"position": "relative"}}>
                <ExploreComponent/>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-4 d-none d-lg-block">
                <WhoToFollowList/>
            </div>
        </div>

        <Link to="/hello">
            Hello
        </Link> |
        <Link to="/">
            Labs
        </Link>
    </>);
};
export default ExploreScreen;
