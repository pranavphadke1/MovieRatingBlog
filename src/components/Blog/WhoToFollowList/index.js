import React, {useEffect} from "react";
import {useSelector,useDispatch} from "react-redux";
import WhoToFollowListItem from "./WhoToFollowListItem";
import{findAllUsers} from "../../../actions/users-actions";

const WhoToFollowList = () => {
    const users = useSelector((state) => state.users);
    const dispatch = useDispatch();
    useEffect(() =>
                  findAllUsers(dispatch),
              []);
    return (
        <ul className="list-group wd-list-group-override">
            <li className="list-group-item">
                Popular Reviewers
            </li>

            {
                users.filter(u => u.role == 'REVIEWER').map(user => {
                    return (<WhoToFollowListItem who={user}/>);
                })
            }

        </ul>
    );
}

export default WhoToFollowList;
