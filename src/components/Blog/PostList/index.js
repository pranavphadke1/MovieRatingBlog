import React from "react";
import PostItem from "./PostItem.js";
import post from "./posts.json";

const PostList = () => {
    return (
        <div class="list-group">
            {post.map(post => {
                return (<PostItem post={post}/>);
            })
            }

        </div>
    );
}

export default PostList;