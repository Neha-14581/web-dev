const NavigationSidebar = () => {
    return(`
                        <div class="list-group">
                <a class="list-group-item" href="#">
                    <i class="fab fa-twitter"></i>
                </a>
                <a href="../../../../tuiter/home.html" class="list-group-item" aria-current="true">
                    <i class="fa fa-home" style="color: black"></i> Home
                </a>
                <a href="../../../../tuiter/explore.html" class="list-group-item active" aria-current="true">
                    <i class="fa fa-hashtag" style="color: black"></i> Explore
                </a>
                <a href="../../../../tuiter/notifications.html" class="list-group-item" aria-current="true">
                    <i class="fa fa-bell" style="color: black"></i> Notifications
                </a>
                <a href="../../../../tuiter/messages.html" class="list-group-item" aria-current="true">
                    <i class="fa fa-envelope" style="color: black"></i> Messages
                </a>
                <a href="../../../../tuiter/bookmarks.html" class="list-group-item" aria-current="true">
                    <i class="fa fa-bookmark" style="color: black"></i> Bookmarks
                </a>
                <a href="../../../../tuiter/lists.html" class="list-group-item" aria-current="true">
                    <i class="fa fa-list" style="color: black"></i> Lists
                </a>
                <a href="../../../../tuiter/profile.html" class="list-group-item" aria-current="true">
                    <i class="fa fa-user-circle" style="color: black"></i> Profile
                </a>
                <a href="../../../../tuiter/more" class="list-group-item" aria-current="true">
                    <i class="fa fa-ellipsis-v" style="color: black"></i> More
                </a>
                <button type="submit" class="btn btn-primary rounded-pill mt-2">Tuit</button>
            </div>
    `);
}
export default NavigationSidebar;
