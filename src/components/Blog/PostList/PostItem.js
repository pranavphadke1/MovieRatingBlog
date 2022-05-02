const PostItem = ({
                      post = {
                          "userName": "Elon Musk",
                          "handle": "elonmusk",
                          "profilePic": "../../../tuiter/Images/elonMuskLogo.png",
                          "time": "23h",
                          "title": "Amazing show about @Inspiration4x mission!",
                          "image": "../../../tuiter/Images/inspiration4.png",
                          "comments": "4.2k",
                          "retuits": "3.5k",
                          "likes": "37.5k",
                          "postContent": {
                              "contentTitle": "Countdown: Inspiration4 Mission to Space | Netflix Official Site",
                              "description": "From training to launch to landing, this all-access docuseries rides along with the Inspiration4 crew on the first all-civilian orbital space..."
                          }
                      }
                  }) => {
    return (
        <li className="list-group-item p-3 wd-post-container">
            <div className="wd-postItem-image-container">
                <img src={post.profilePic} className="wd-profile-pic2"/>
            </div>

            <div className="wd-postItem-content-container">
                <div className="wd-author">
                    {post.userName} <i className="fas fa-certificate wd-certificate "></i>
                    <span className="wd-time"> {post.handle} - {post.time}</span>
                </div>
                <div className="wd-content">
                    {post.title}
                </div>
                {post.postContent ?
                 <div>
                     <img src={post.image} className="wd-postItem-image wd-round-top"/>
                     <div className="wd-round-bottom p-2">
                         <div className="wd-content"> {post.postContent.contentTitle}</div>
                         <div className="wd-time"> {post.postContent.description}</div>
                     </div>
                 </div> :
                 <div>
                     <img src={post.image}
                          className="wd-postItem-image wd-round-top wd-round-bottom"/>
                 </div>}
                <table className="wd-icons">
                    <tbody>
                    <tr>
                        <td className="wd-icon-colors">
                            <i className="fas fa-comment"></i> {post.comments}
                        </td>
                        <td className="wd-icon-colors">
                            <i className="fas fa-retweet"></i> {post.retuits}
                        </td>
                        <td className="wd-icon-colors">
                            <i className="fas fa-heart"></i> {post.likes}
                        </td>
                        <td className="wd-icon-colors">
                            <i className="fas fa-arrow-up"></i>
                        </td>
                    </tr>
                    </tbody>
                </table>

            </div>

        </li>
    );
}

export default PostItem;