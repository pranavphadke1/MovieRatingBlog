import AnonUser from "./anonUser";
import LoggedInProfileScreen from "./loggedInProfile";
import {useParams} from "react-router-dom";
import {useProfile} from "../../../context/profile-context";

const ProfileScreen = () => {
    const {pID} = useParams()
    const {profile} = useProfile();
    return (
        (profile && profile._id === pID) ? <LoggedInProfileScreen/> : <AnonUser/>

    )

}

export default ProfileScreen