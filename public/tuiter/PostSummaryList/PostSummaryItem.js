const PostSummaryItem = (post) => {
    return (`
    <li class="list-group-item p-3 wd-post-container">
                        <div class="wd-post-with-image">
                            <div class="wd-topic">
                                ${post.topic}
                            </div>
                            <div class="wd-author">
                                ${post.userName} <i class="fas fa-certificate wd-certificate "></i>
                                <span class="wd-time">- ${post.time}</span>
                            </div>
                            <div class="wd-content">
                                ${post.title}
                            </div>
                        </div>
                        <div class="wd-posts-image-container">
                            <img src= ${post.image} class="wd-post-image">
                        </div>
    </li>
    
    `);
}

export default PostSummaryItem;