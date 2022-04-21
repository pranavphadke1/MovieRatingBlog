import React from "react";
import {Link} from "react-router-dom";

const ProfileListItem = ({
                             profile = {
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
    return (
        <li>
            <div className="pt-1 pb-1">
                <i className="fas fa-arrow-left float-start ps-4 pt-2 pb-2 pe-4"></i>
                <h5> {profile.firstName} {profile.lastName}</h5>
            </div>
            <img className="wd-profile-background-image" src={profile.bannerPicture}/>
            <div className="position-relative">
                <img className="wd-profile-profile-picture" src={profile.profilePicture}/>
            </div>

            <div className="wd-edit-profile-container">
                <Link to="/tuiter/edit-profile">
                    <button className="float-end rounded-pill wd-edit-profile">
                        Edit profile
                    </button>
                </Link>
            </div>
            <h4 className="wd-bio-name">{profile.firstName} {profile.lastName}</h4>
            <h6 className="wd-bio-handle">@{profile.handle}</h6>
            <h6 className="wd-bio-content">{profile.bio}</h6>
            <h6 className="wd-bio-other">
                <i className="fas fa-globe"></i> <span
                className="wd-bio-icon">{profile.location}</span>
                <i className="fas fa-birthday-cake"></i> <span
                className="wd-bio-icon">Born {profile.dateOfBirth}</span>
                <i className="fas fa-calendar-alt"></i> <span
                className="wd-bio-icon">Joined {profile.dateJoined}</span>
            </h6>
            <h6 className="wd-following-followers-container">
                {profile.followingCount} <span className="wd-following-followers">Following</span>
                {profile.followersCount} <span className="wd-following-followers">Followers</span>
            </h6>

        </li>
    );
}

export default ProfileListItem;