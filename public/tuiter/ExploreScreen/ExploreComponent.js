import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return (`
            <div class="wd-search-bar-area position-relative">
                    <i class="wd-magnify-glass position-absolute fa fa-search-plus "></i>
                    <input class="wd-search-bar ps-5" placeholder="Search Twitter">
                    <a href="explore-settings.html"> <i class="wd-gear fa fa-cog"></i> </a>
           </div>
           <ul class="nav mb-2 nav-tabs mt-3">
                    <li class="nav-item">
                        <a class="nav-link active" href="for-you.html">For you</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="trending.html">Trending</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="news.html">News</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="sports.html">Sports</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link d-sm-none d-md-block"
                           href="entertainment.html">Entertainment</a>
                    </li>
           </ul>
           <div class="list-group">
               <li class="list-group-item p-0 position-relative">
                    <img src="../Images/spaceXStarship.png" class="wd-image">
                    <label class="wd-image-text">SpaceX's Starship</label>
                </li>
            </div>
            
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;
