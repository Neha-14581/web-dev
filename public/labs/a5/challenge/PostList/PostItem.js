import styles from "../../../../tuiter/bookmarks.css";

const PostItem = (posts) => {
    return(`
<div class="wd-thin-border wd-solid wd-grey-border">
    <div class="wd-margin">
        <div>
            <img class ="wd-divisionB-img" src="${posts.profile}">
        </div>
        <div>
            <p class ="wd-divC-author">${posts.authorName}</p>
            <div class = "wd-divisionC-handle fas fa-check-circle ms-3">${posts.nick} &middot; ${posts.time}</div>
            <i class="fas fa-ellipsis-h"></i>
            <div class="wd-divisionD-text">${posts.title}</div>
        </div>
    </div>
</div>


<div class="wd-thin-border wd-solid wd-grey-border">
    <div class="wd-margin-to-left">
        <div class="wd-thin-border wd-grey-border wd-solid ">
            <div class="wd-margin-to-left">
                <div class = "wd-img-text">
                    <img class ="wd-divisionE-img" src="${posts.image}"/>
                    <br>
                    <div class="wd-divisionD-title">${posts.heading} </div>
                    <p class ="wd-divisionE-img-text">${posts.para}</p>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="wd-thin-border wd-grey-border wd-solid ">
    <div class="wd-margin-to-left">

        <div class="grid-row-settings">
            <div class="grid-column-sidebar-leftside">
                <i class="wd-comment"></i> 15
            </div>
            <div class="grid-column-content-main">
                <i class="wd-retweet"></i> 3
            </div>
            <div class="grid-column-content-sub-main">
                <i class="wd-heart"></i> 55
            </div>
            <div class="grid-column-sidebar-rightside">
                <i class="wd-share"></i>
            </div>
        </div>
    </div>
</div>

                 
        `);
}
export default PostItem;










