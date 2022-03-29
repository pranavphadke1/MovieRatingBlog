import {useDispatch}
    from "react-redux";
import React, {useState} from "react";

const WhatsHappening = () => {
    let [whatsHappening, setWhatsHappening]
        = useState('');
    const dispatch = useDispatch();
    const tuitClickHandler = () => {
        dispatch({
                     type: 'create-tuit',
                     tuit: whatsHappening
                 });
    }
    return (
        <div className="list-group-item wd-whats-happening-container">
            <div className="p-3 wd-post-container">
                <div className=" wd-postItem-image-container">
                    <img src="../../../tuiter/Images/pranav.jpg" className="wd-profile-pic2"/>
                </div>
                <div className="wd-whats-happening-content-container">
                <textarea className="wd-whats-happening-textarea" placeholder="Whats happening?"
                          onChange={(event) =>
                              setWhatsHappening(event.target.value)}>
                </textarea>
                    <i className="fas fa-image wd-tuit-icon"></i>
                    <i className="fas fa-poll wd-tuit-icon"></i>
                    <i className="fas fa-grin wd-tuit-icon"></i>
                    <i className="fas fa-calendar wd-tuit-icon"></i>
                    <button className="float-end rounded-pill wd-tuit-button"
                            onClick={tuitClickHandler}>
                        Tuit
                    </button>
                </div>
            </div>
        </div>
    );
}
export default WhatsHappening;