import {useDispatch}
    from "react-redux";
import React, {useState} from "react";
import {createTuit} from "../../../actions/tuits-actions";

const WhatsHappening = () => {
    const dispatch = useDispatch();
    const [newTuit, setNewTuit] =
        useState({
                     tuit: "New Tuit!",
                     _id: (new Date()).getTime() + '',
                     topic: "",
                     postedBy: {
                         username: "Pranav Phadke",
                     },
                     liked: false,
                     verified: false,
                     handle: "pranav.ke",
                     title: "",
                     time: "Just Now",
                     ["logo-image"]: "../../../tuiter/Images/pranav.jpg",
                     tuits: "0",
                     stats: {
                         comments: 0,
                         retuits: 0,
                         likes: 0,
                         dislikes: 0
                     }
                 });
    return (
        <div className="list-group-item wd-whats-happening-container">
            <div className="p-3 wd-post-container">
                <div className=" wd-postItem-image-container">
                    <img src="../../../tuiter/Images/pranav.jpg" className="wd-profile-pic2"/>
                </div>
                <div className="wd-whats-happening-content-container">
                <textarea className="wd-whats-happening-textarea" placeholder="Whats happening?"
                          onChange={(e) =>
                              setNewTuit({
                                             ...newTuit,
                                             tuit: e.target.value
                                         })}>
                </textarea>
                    <i className="fas fa-image wd-tuit-icon"></i>
                    <i className="fas fa-poll wd-tuit-icon"></i>
                    <i className="fas fa-grin wd-tuit-icon"></i>
                    <i className="fas fa-calendar wd-tuit-icon"></i>
                    <button className="float-end rounded-pill wd-tuit-button"
                            onClick={() =>
                                createTuit(dispatch, newTuit)}>
                        Tuit
                    </button>
                </div>
            </div>
        </div>
    );
}
export default WhatsHappening;