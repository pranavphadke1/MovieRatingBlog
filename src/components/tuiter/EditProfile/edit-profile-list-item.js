import {useDispatch}
    from "react-redux";
import React, {useState} from "react";
import {Link} from "react-router-dom";

const EditProfileListItem = ({
                                 oldProfile = {
                                     "firstName": "Pranav",
                                     "lastName": "Phadke",
                                     "handle": "phadke.pr",
                                     "profilePicture": "../../../tuiter/Images/pranav.jpg",
                                     "bannerPicture": "../../../tuiter/Images/background.jpg",
                                     "bio": "Sophomore @ Northeastern University, CS & Math, Spikeball, Snowboarding",
                                     "website": "https://github.com/pranavphadke1",
                                     "location": "Boston, MA",
                                     "dateOfBirth": "10/23/2001",
                                     "dateJoined": "1/2018",
                                     "followingCount": 305,
                                     "followersCount": 278
                                 }
                             }) => {
    let [profile, setProfile]
        = useState(oldProfile);
    const dispatch = useDispatch();
    const saveClickHandler = () => {
        dispatch({
                     type: 'update-profile', profile
                 });
    }
    const updateProfileClickHandler = (prof) => {
        setProfile(prof);
    }

    return (
        <div className="list-group-item wd-whats-happening-container">
            <div className="mt-1 mb-1 ">
                <h5 className="m-0 wd-edit-profile-top">
                    <Link to="/tuiter/profile">
                        <i className="fas fa-window-close float-start ps-2 pe-4"/>
                    </Link>
                    Edit Profile
                    <Link to="/tuiter/profile">
                        <button className="float-end rounded-pill wd-save"
                                onClick={saveClickHandler}>
                            Save
                        </button>
                    </Link>
                </h5>

            </div>
            <img className="wd-profile-background-image" src={profile.bannerPicture}/>
            <div className="position-relative">
                <img className="wd-profile-profile-picture" src={profile.profilePicture}/>
            </div>

            <div className="wd-edit-profile-container"></div>

            <label>First Name</label>
            <textarea className="wd-whats-happening-textarea" value={profile.firstName}
                      onChange={(event) =>
                          updateProfileClickHandler({...profile, firstName: event.target.value})}>
            </textarea>

            <label>Last Name</label>
            <textarea className="wd-whats-happening-textarea" value={profile.lastName}
                      onChange={(event) =>
                          updateProfileClickHandler({...profile, lastName: event.target.value})}>
            </textarea>

            <label>Bio</label>
            <textarea className="wd-whats-happening-textarea" value={profile.bio}
                      onChange={(event) =>
                          updateProfileClickHandler({...profile, bio: event.target.value})}>
            </textarea>

            <label>Location</label>
            <textarea className="wd-whats-happening-textarea" value={profile.location}
                      onChange={(event) =>
                          updateProfileClickHandler({...profile, location: event.target.value})}>
            </textarea>

            <label>Website</label>
            <textarea className="wd-whats-happening-textarea" value={profile.website}
                      onChange={(event) =>
                          updateProfileClickHandler({...profile, website: event.target.value})}>
            </textarea>

            <label>Date Of Birth</label>
            <textarea className="wd-whats-happening-textarea" value={profile.dateOfBirth}
                      onChange={(event) =>
                          updateProfileClickHandler({...profile, dateOfBirth: event.target.value})}>
            </textarea>

        </div>
    );
}
export default EditProfileListItem;