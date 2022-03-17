const WhoToFollowListItem = ({
                                 who = {
                                     avatarIcon: '../../../tuiter/src/java.png',
                                     userName: 'Java', handle: 'Java',
                                 }
                             }
) => {
    return (
        <li className="list-group-item wd-suggested-follow position-relative">
            <div className="wd-profile-pic-container me-1 ">
                <img src={who.avatarIcon} className="wd-profile-pic"/>
            </div>
            <div className="wd-follow-info">
                <div className="wd-profile-name"> {who.userName}
                    <i className="fas fa-certificate wd-certificate "></i>
                </div>
                <div className="wd-handle-name"> {who.handle} </div>
            </div>
            <button className="btn btn-primary position-absolute wd-follow border-0">
                Follow
            </button>
        </li>
);
}
export default WhoToFollowListItem;

