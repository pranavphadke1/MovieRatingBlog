import React from "react";
import NavigationSidebar from "../NavigationSidebar";
import PostSummaryList from "../PostSummaryList/index.js";
import PostList from "../PostList";
import {Link} from "react-router-dom";

const HomeScreen = () => {
    return (<>
        <div className="row mt-2 flex-nowrap">
            <div className="col-xxl-2 col-xl-2 col-lg-1 col-md-2 col-sm-3 col-3">
                <NavigationSidebar active="home"/>
            </div>
            <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-10 col-sm-9 col-8"
                 style={{"position": "relative"}}>
                <PostList/>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-4 d-none d-lg-block">
                <PostSummaryList/>
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
export default HomeScreen;
