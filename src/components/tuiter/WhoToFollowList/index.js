import React from "react";
import WhoToFollowListItem from "./WhoToFollowListItem";
import who from "./who.json"

const WhoToFollowList = () => {
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
