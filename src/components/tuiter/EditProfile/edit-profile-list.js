import React from "react";
import {useSelector} from "react-redux";
import EditProfileListItem from "./edit-profile-list-item";

const EditProfile = () => {
    const profile = useSelector((state) => state.profile);
    return (
        <div className="list-group list-unstyled ">
            {
                profile.map && profile.map(profile => <div className="list-group-item ps-0 pe-0 ">
                    <EditProfileListItem oldProfile={profile}/>
                </div>)
            }
        </div>
    );
}

export default EditProfile;



