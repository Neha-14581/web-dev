const NavigationSidebar = () => {
    return(`
                        <div class="list-group">
                <a class="list-group-item" href="#">
                    <i class="fab fa-twitter"></i>
                </a>
                <a href="../home.html" class="list-group-item" aria-current="true">
                    <i class="fa fa-home" style="color: black"></i> Home
                </a>
                <a href="../explore.html" class="list-group-item active" aria-current="true">
                    <i class="fa fa-hashtag" style="color: black"></i> Explore
                </a>
                <a href="../notifications.html" class="list-group-item" aria-current="true">
                    <i class="fa fa-bell" style="color: black"></i> Notifications
                </a>
                <a href="../messages.html" class="list-group-item" aria-current="true">
                    <i class="fa fa-envelope" style="color: black"></i> Messages
                </a>
                <a href="../bookmarks.html" class="list-group-item" aria-current="true">
                    <i class="fa fa-bookmark" style="color: black"></i> Bookmarks
                </a>
                <a href="../lists.html" class="list-group-item" aria-current="true">
                    <i class="fa fa-list" style="color: black"></i> Lists
                </a>
                <a href="../profile.html" class="list-group-item" aria-current="true">
                    <i class="fa fa-user-circle" style="color: black"></i> Profile
                </a>
                <a href="../more" class="list-group-item" aria-current="true">
                    <i class="fa fa-ellipsis-v" style="color: black"></i> More
                </a>
                <button type="submit" class="btn btn-primary rounded-pill mt-2">Tuit</button>
            </div>
    `);
}
export default NavigationSidebar;
