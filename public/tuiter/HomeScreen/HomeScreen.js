import NavigationSidebar from "../NavigationSidebar/index.js";
import PostList from "../PostList/index.js";
import PostSummaryList from "../PostSummaryList/index.js";

(function ($) {
    $('#wd-home').append(`
<a href="../navigation.html">Back</a>
        <div class="row mt-2 flex-nowrap">
            <div class="col-xxl-2 col-xl-2 col-lg-1 col-md-2 col-sm-3 col-3">
                ${NavigationSidebar('home')}
            </div>
            <div class="col-xxl-7 col-xl-7 col-lg-7 col-md-10 col-sm-9 col-8">
                ${PostList()}
            </div>            
            <div class="col-xxl-3 col-xl-3 col-lg-4 d-none d-lg-block">
                ${PostSummaryList()}
            </div>
        </div>
    `);
})($);
