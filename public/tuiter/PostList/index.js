import PostItem from "./PostItem.js";
import post from "./posts.js";

const PostList = () => {
    return (`
    <div class="list-group">
        ${post.map(post => {
        return (PostItem(post))
    }).join('')
    }
    
    </div>
    `);
}

export default PostList