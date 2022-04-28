import NavigationSidebar from "../NavigationSidebar/index.js";
import ExploreComponent from "./ExploreComponent.js";
import WhoToFollowList from "../WhoToFollowList/index.js";

(function ($) {
    $('#wd-explore').append(`
<a href="../navigation.html">Back</a>
        <div class="row mt-2 flex-nowrap">
            <div class="col-xxl-2 col-xl-2 col-lg-1 col-md-2 col-sm-3 col-3">
                ${NavigationSidebar('explore')}
            </div>
            <div class="col-xxl-7 col-xl-7 col-lg-7 col-md-10 col-sm-9 col-8">
                ${ExploreComponent()}
            </div>            
            <div class="col-xxl-3 col-xl-3 col-lg-4 d-none d-lg-block">
                ${WhoToFollowList()}
            </div>
        </div>
    `);
})($);
