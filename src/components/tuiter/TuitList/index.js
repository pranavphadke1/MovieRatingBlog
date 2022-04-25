import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import TuitListItem
    from "./TuitListItem";
import TuitStats from "../TuitStats/tuit-stats";
import{deleteTuit,findAllTuits} from "../../../actions/tuits-actions";

const TuitList = () => {
    const tuits = useSelector(
        state => state.tuits);
    const dispatch = useDispatch();
    useEffect(() =>
                  findAllTuits(dispatch),
              []);

    return (
        <ul className="ttr-tuits list-group list-unstyled">
            {
                tuits.map && tuits.map(tuit => <div className="list-group-item ">
                    <i onClick={() => deleteTuit(dispatch, tuit)}
                       className="fas fa-2x fa-minus-circle wd-remove"/>
                    <TuitListItem key={tuit._id}
                                  tuit={tuit}/>
                    <div className="wd-postItem-content-container">
                        <TuitStats tuit={tuit}/>
                    </div>
                </div>)
            }
        </ul>
    );
}

export default TuitList;