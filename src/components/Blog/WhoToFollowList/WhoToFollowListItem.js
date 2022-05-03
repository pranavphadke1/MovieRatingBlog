import {Link} from "react-router-dom";
import React from "react";
import {useProfile} from "../../../context/profile-context";

const WhoToFollowListItem = ({
                                 who = {
                                     firstName: 'fn',
                                     lastName: 'ln',
                                 }
                             }
) => {
    const {profile} = useProfile();
    return (
        <li className="list-group-item  position-relative">
            <div className="wd-content wd-post-container">
                <li className="list-group-item border-0 w-75 p-1">
                    <Link to={`/profile/${who._id}`}>
                        {who.handle}
                    </Link>
                </li>
            </div>

        </li>
    );
}
export default WhoToFollowListItem;

