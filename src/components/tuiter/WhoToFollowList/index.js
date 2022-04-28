import React, {useEffect} from "react";
import {useSelector,useDispatch} from "react-redux";
import WhoToFollowListItem from "./WhoToFollowListItem";
import{findAllUsers} from "../../../actions/who-actions";

const WhoToFollowList = () => {
    const who = useSelector((state) => state.who);
    const dispatch = useDispatch();
    useEffect(() =>
                  findAllUsers(dispatch),
              []);
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
