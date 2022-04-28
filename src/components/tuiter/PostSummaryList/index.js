import React from "react";
import PostSummaryItem from "./PostSummaryItem.js";
import post from "./post.json";

const PostSummaryList = () => {
    return (
        <div className="list-group">
            {post.map(post => {
                return (<PostSummaryItem post={post}/>);
            })
            }

        </div>
    );
}

export default PostSummaryList;