const PostItem = (post) => {
    return (`
    <li class="list-group-item p-3 wd-post-container">
                        <div class="wd-postItem-image-container">
                            <img src= ${post.profilePic} class="wd-profile-pic">
                        </div>

                        <div class="wd-postItem-content-container">
                            <div class="wd-author">
                                ${post.userName} <i class="fas fa-certificate wd-certificate "></i>
                                <span class="wd-time"> ${post.handle} - ${post.time}</span>
                            </div>
                            <div class="wd-content">
                                ${post.title}
                            </div>
                            ${post.postContent ? 
                                `<div> 
                                    <img src = ${post.image} class="wd-postItem-image wd-round-top">
                                    <div class = "wd-round-bottom p-2">
                                        <div class="wd-content"> ${post.postContent.contentTitle}</div>
                                        <div class="wd-time"> ${post.postContent.description}</div>
                                    </div>
                                </div>`:
                                `<div> 
                                    <img src = ${post.image} class="wd-postItem-image wd-round-top wd-round-bottom">
                                </div>`}
                            <table class="wd-icons">
                            <tbody>
                                <tr>
                                    <td class="wd-icon-colors">
                                        <i class="fas fa-comment"></i> ${post.comments}
                                    </td>
                                    <td class="wd-icon-colors">
                                        <i class="fas fa-retweet"></i> ${post.retuits}
                                    </td>
                                    <td class="wd-icon-colors">
                                        <i class="fas fa-heart"></i> ${post.likes}
                                    </td>
                                    <td class="wd-icon-colors">
                                        <i class="fas fa-arrow-up"></i>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                            
                        </div>
                        
    </li>
    `);
}

export default PostItem;