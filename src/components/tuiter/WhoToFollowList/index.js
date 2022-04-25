import React from "react";
import WhoToFollowListItem from "./WhoToFollowListItem";
import {useSelector} from "react-redux";
const WhoToFollowList = () => {
    const who = useSelector((state) => state.who);
    return (
        <ul className="list-group wd-list-group-override">
            <li className="list-group-item">
                Who to follow
            </li>

            {
                who.map(who => {
                    return (<WhoToFollowListItem who={who}/>);
                })
            }

        </ul>
    );
}

export default WhoToFollowList;
