import React from "react";
import {useSelector} from "react-redux";
import ProfileListItem from "./profile-list-item";

const Profile = () => {
    const profile = useSelector((state) => state.profile);
    return (
        <div className="list-group list-unstyled ">
            {
                profile.map && profile.map(profile => <div className="list-group-item ps-0 pe-0 ">
                    <ProfileListItem profile={profile}/>
                </div>)
            }
        </div>
    );
}

export default Profile;



