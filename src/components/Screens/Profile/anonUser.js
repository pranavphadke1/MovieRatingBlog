import {findAllUsers} from "../../../actions/users-actions";
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import {useProfile} from "../../../context/profile-context";

const AnonUser = () => {
    const {pID} = useParams()
    const {profile} = useProfile();
    const users = useSelector((state) => state.users);
    const dispatch = useDispatch();
    useEffect(() =>
                  findAllUsers(dispatch),
              []);
    const user = users.find(x => x._id == pID);
    console.log(profile._id)
    console.log(pID)

    return (
        <div>
            <h2>{user.firstName} {user.lastName}</h2>
            <hr/>
            <h4>Personal Information</h4>
            <h5>Followers: {user.followers}</h5>
            <h5>Following: {user.following.length}</h5>

            {profile ?
             <button className="btn btn-primary">
                 Follow User
             </button> : <></>
            }
        </div>
    )

}

export default AnonUser;