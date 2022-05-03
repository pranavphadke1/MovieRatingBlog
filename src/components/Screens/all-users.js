import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";
import {useProfile} from "../../context/profile-context";

const EditUsersScreen = () => {
    const {profile} = useProfile()
    const [users, setUsers] = useState([])
    const findAllUsers = async () => {
        const response = await axios.get('http://localhost:4000/api/users')
        let usersMinusCurrent = response.data.filter(user => user.role && user.role != 'ADMIN');
        setUsers(usersMinusCurrent);
    }
    useEffect(() => {
        findAllUsers();
    }, [])

    const handleDelete = async (userID) => {
        const response = await axios.delete(`http://localhost:4000/api/users/${userID}`);
        await findAllUsers();
    }

    return (
        (

            <div>
                <ul className="list-group">
                    All Users
                    {
                        users.filter(u=>u.role=='USER').map(user =>
                                      <li className="list-group-item">
                                          <Link to={`/profile/${user._id}`}>
                                              {user.handle}
                                          </Link>
                                          {profile && profile.role == 'ADMIN' ?
                                           <button
                                               onClick={() => handleDelete(user._id)}
                                               className="btn btn-primary float-end">
                                               Delete
                                           </button>
                                          : <></>}
                                      </li>
                        )
                    }

                    All Reviewers
                    {
                        users.filter(u=>u.role=='REVIEWER').map(user =>
                                      <li className="list-group-item">
                                          <Link to={`/profile/${user._id}`}>
                                              {user.handle}
                                          </Link>
                                          {profile && profile.role == 'ADMIN' ?
                                           <button
                                               onClick={() => handleDelete(user._id)}
                                               className="btn btn-primary float-end">
                                               Delete
                                           </button>
                                                                              : <></>}
                                      </li>
                        )
                    }
                </ul>
            </div>
        )
    );
};

export default EditUsersScreen;