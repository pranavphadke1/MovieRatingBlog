const TuitListItem = ({
                      tuit = {
                          "_id": "123",
                          "topic": "Web Development",
                          "postedBy": {
                              "username": "ReactJS"
                          },
                          "liked": true,
                          "verified": false,
                          "handle": "ReactJS",
                          "time": "2h",
                          "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
                          "tuit": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
                          "attachments": {
                              "video": "unKvMC3Y1kI"
                          },
                          "logo-image": "../../../tuiter/Images/reactLogo.png",
                          "stats": {
                              "comments": 123,
                              "retuits": 234,
                              "likes": 345,
                              "dislikes": 11
                          }
                      }
                  }) => {
    return (
        <li className="p-3 wd-post-container">
            <div className="wd-postItem-image-container">
                <img src={tuit["logo-image"]} className="wd-profile-pic2"/>
            </div>

            <div className="wd-postItem-content-container">
                <div className="wd-author">
                    {tuit.postedBy.username} <i className="fas fa-certificate wd-certificate "></i>
                    <span className="wd-time"> {tuit.handle}</span>
                </div>
                <div className="wd-content">
                    {tuit.tuit}
                </div>
                {tuit.attachments ?
                    tuit.attachments.video ?
                    <div>
                        <iframe width="560" height="315" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen src = {'https://www.youtube.com/embed/' + tuit.attachments.video}
                                className="wd-postItem-video wd-round-top wd-round-bottom"/>
                    </div> :
                    <div>
                        <img src={tuit.attachments.image} className="wd-postItem-image wd-round-top wd-round-bottom"/>
                    </div>
                 :
                 <div> </div>
                }


            </div>

        </li>
    );
}

export default TuitListItem;