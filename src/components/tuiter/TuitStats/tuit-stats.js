import {useDispatch} from "react-redux";

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
                    <span onClick={likeTuit}>
                        {
                            tuit.liked &&
                            <i className="fas fa-heart me-1" style={{color: 'red'}}/>
                        }
                        {
                            !tuit.liked &&
                            <i className="far fa-heart me-1"/>
                        }
                        {tuit.stats && tuit.stats.likes}
                    </span>
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