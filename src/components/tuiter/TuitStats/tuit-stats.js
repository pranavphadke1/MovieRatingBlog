import {useDispatch} from "react-redux";
import {updateTuit} from "../../../actions/tuits-actions";

const TuitStats = ({tuit}) => {
    const dispatch = useDispatch();
    const likeTuit = () => {
        dispatch({type: 'like-tuit', tuit});
    };
    return (

        <table className="wd-icons">
            <tbody>
            <tr>
                <td className="wd-icon-colors">
                    <i className="fas fa-comment"/> {tuit.stats.comments}
                </td>
                <td className="wd-icon-colors">
                    <i className="fas fa-retweet"/> {tuit.stats.retuits}
                </td>
                <td className="wd-icon-colors">
                    <div>
                        <i onClick={() => updateTuit(dispatch, {
                            ...tuit,
                            stats: {
                                comments: tuit.stats.comments,
                                retuits: tuit.stats.retuits,
                                likes: tuit.stats.likes + 1,
                                dislikes: tuit.stats.dislikes
                            }
                        })} className="far fa-thumbs-up ms-2"/>
                        {tuit.stats.likes}
                    </div>
                </td>

                <td className="wd-icon-colors">
                    <div>
                        <i onClick={() => updateTuit(dispatch, {
                            ...tuit,
                            stats: {
                                comments: tuit.stats.comments,
                                retuits: tuit.stats.retuits,
                                likes: tuit.stats.likes,
                                dislikes: tuit.stats.dislikes + 1
                            }
                        })} className="far fa-thumbs-down ms-2"/>
                        {tuit.stats.dislikes}
                    </div>
                </td>

                <td className="wd-icon-colors">
                    <i className="fas fa-arrow-up"/>
                </td>
            </tr>
            </tbody>
        </table>
    );
}
export default TuitStats;