const WhoToFollowListItem = (who) => {
    return (`
        <li class="list-group-item wd-suggested-follow position-relative">
            <div class="wd-profile-pic-container me-1 ">
                <img src = ${who.avatarIcon} class="wd-profile-pic">
            </div>
            <div class="wd-follow-info">
                <div class="wd-profile-name"> ${who.userName}
                    <i class="fas fa-certificate wd-certificate "></i>
                </div>
                <div class="wd-handle-name"> ${who.handle} </div>
            </div>
            <button class="btn btn-primary position-absolute wd-follow border-0">
                Follow
            </button>
        </li>
    `);
}
export default WhoToFollowListItem;

