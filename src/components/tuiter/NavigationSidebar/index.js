import React from "react";
import {Link} from "react-router-dom";

const NavigationSidebar = ({
                               active = 'explore'
                           }
) => {
    return (
        <>
            <div className="list-group">
                <Link to="/"
                      className="list-group-item ">
                    <i className="fab fa-twitter fa-lg p-1"></i>
                </Link>
                <Link to="/"
                   className={`list-group-item list-group-item-action ${active === '/' ? 'active'
                                                                                         : ''}`}>
                    <i className="fas fa-home fa-lg p-1 wd-icon"></i> <span
                    className="d-none d-xl-block">Home</span></Link>
                <Link to="/explore"
                   className={`list-group-item  list-group-item-action ${active === '/explore'
                                                                         ? 'active'
                                                                         : ''}`}>
                    <i className="fas fa-hashtag fa-lg p-1 wd-icon"></i> <span
                    className="d-none d-xl-block">Explore</span></Link>
                <Link to="#"
                   className={`list-group-item list-group-item-action ${active === '/notifications'
                                                                        ? 'active' : ''}`}>
                    <i className="fas fa-bell fa-lg p-1 wd-icon"></i> <span
                    className="d-none d-xl-block">Notifications</span></Link>
                <Link to="#"
                   className={`list-group-item  list-group-item-action ${active === '/messages'
                                                                         ? 'active'
                                                                         : ''}`}>
                    <i className="fas fa-envelope fa-lg p-1 wd-icon"></i> <span
                    className="d-none d-xl-block">Messages</span></Link>
                <Link to="#"
                   className={`list-group-item  list-group-item-action ${active === '/bookmarks'
                                                                         ? 'active'
                                                                         : ''}`}>
                    <i className="fas fa-bookmark fa-lg p-1 wd-icon"></i> <span
                    className="d-none d-xl-block">Bookmarks</span></Link>
                <Link to="#"
                   className={`list-group-item list-group-item-action ${active === '/lists' ? 'active'
                                                                                          : ''}`}>
                    <i className="fas fa-list fa-lg p-1 wd-icon"></i> <span
                    className="d-none d-xl-block">Lists</span></Link>
                <Link to="/profile"
                   className={`list-group-item  list-group-item-action ${active === '/profile'
                                                                         ? 'active'
                                                                         : ''}`}>
                    <i className="fas fa-user fa-lg p-1 wd-icon"></i> <span
                    className="d-none d-xl-block">Profile</span></Link>
                <Link to="#"
                   className={`list-group-item list-group-item-action ${active === '/more' ? 'active'
                                                                                         : ''}`}>
                    <i className="fas fa-ellipsis-h fa-lg p-1 wd-icon"></i> <span
                    className="d-none d-xl-block">More</span></Link>
            </div>
            <div className="d-grid mt-2">
                <Link to="/"
                   className="btn btn-primary btn-block rounded-pill">
                    Tweet</Link>
            </div>
        </>
    )
        ;
}
export default NavigationSidebar;
