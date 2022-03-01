import PostSummaryItem from "./PostSummaryItem.js";
import post from "./post.js";

const PostSummaryList = () => {
    return (`
    <div class="list-group">
        ${post.map(post => {
        return (PostSummaryItem(post))
    }).join('')
    }
    
    </div>
    `);
}

export default PostSummaryList