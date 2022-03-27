import NavigationSidebar from "../NavigationSidebar/index.js";
import PostSummaryList from "../PostSummaryList/index.js";
import PostItemList from "../PostList/index.js";
//import ExploreComponent from "../PostSummaryList/index.js";


(function ($) {
    $('#wd-explore').append(`
        <div class="row mt-2">
        <div class="col-2">
            ${NavigationSidebar('explore')}
        </div>
        <div class="col-6">
            ${PostItemList()}
        </div>
        <div class="col-4">
            ${PostSummaryList()}
        </div>
        
        </div>
    `);
})($);