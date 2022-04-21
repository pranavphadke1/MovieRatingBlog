const PostSummaryItem = ({
                             post = {
                                 topic: 'Web Development',
                                 userName: 'ReactJS',
                                 time: '2h',
                                 title: 'React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs',
                                 image: '../../../tuiter/src/reactLogo.png',
                             }
                         }) => {
    return (
        <li className="list-group-item p-3 wd-post-container">
            <div className="wd-post-with-image">
                <div className="wd-topic">
                    {post.topic}
                </div>
                <div className="wd-author">
                    {post.userName} <i className="fas fa-certificate wd-certificate "></i>
                    <span className="wd-time">- {post.time}</span>
                </div>
                <div className="wd-content">
                    {post.title}
                </div>
            </div>
            <div className="wd-posts-image-container">
                <img src={post.image} className="wd-post-image"/>
            </div>
        </li>

    );
}

export default PostSummaryItem;