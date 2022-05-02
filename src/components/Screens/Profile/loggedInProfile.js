import * as service from "../../../services/auth-service"
import {useNavigate} from "react-router-dom";
import {useProfile} from "../../../context/profile-context";
import React, {useEffect, useState} from "react";
import axios from "axios";
import {signin} from "../../../services/auth-service";


const LoggedInProfileScreen = () => {
    const {profile} = useProfile()
    const navigate = useNavigate()
    const logout = async () => {
        await service.logout()
        navigate('/signin')
    }

    const [info, setInfo] =
        useState(profile);

    useEffect(() =>{
        setInfo(profile)
    })


    const updateInfo = async () => {
        const response = await axios.put(`http://localhost:4000/api/users/${profile._id}`, info)
        await signin(
            info.email,info.password
        )
        navigate('/profile')
    }

    return (
        <div>
            <h1>Profile</h1>
            <button className="btn btn-danger"
                    onClick={logout}>Logout</button>
            <hr/>
            <h4>Personal Information</h4>
            <input className="form-control w-25"/>
            {profile.email}
            <input onChange={(e) => setInfo({...info, firstName: e.target.value})}
                   placeholder={profile.firstName} className="form-control w-75" type="email"/>
            <input onChange={(e) => setInfo({...info, lastName: e.target.value})}
                   placeholder={profile.lastName} className="form-control w-75" type="email"/>
            <input onChange={(e) => setInfo({...info, password: e.target.value})}
                   placeholder={profile.password} className="form-control w-75" type="email"/>

            <button onClick={updateInfo} className="btn btn-primary">
                Update Info
            </button>
        </div>
    );
};

export default LoggedInProfileScreen;