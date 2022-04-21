const NavigationSidebar = (active) => {
    return (`
            <div class="list-group">
                <li class="list-group-item ">
                        <i class="fab fa-twitter fa-lg p-1"></i>
                    </li>
                <a href="../HomeScreen/home.html" 
                   class="list-group-item list-group-item-action ${active == 'home' ? 'active' : ''}">
                <i class="fas fa-home fa-lg p-1 wd-icon"></i></i> <span
                        class="d-none d-xl-block">Home</span></a>
                <a href="../ExploreScreen/explore.html"
                   class="list-group-item  list-group-item-action ${active == 'explore' ? 'active' : ''}">
                    <i class="fas fa-hashtag fa-lg p-1 wd-icon"></i> <span
                        class="d-none d-xl-block">Explore</span></a>
                <a href="#"
                   class="list-group-item list-group-item-action ${active == 'notifications' ? 'active' : ''}">
                    <i class="fas fa-bell fa-lg p-1 wd-icon"></i> <span
                        class="d-none d-xl-block">Notifications</span></a>
                <a href="#"
                   class="list-group-item  list-group-item-action ${active == 'messages' ? 'active' : ''}">
                    <i class="fas fa-envelope fa-lg p-1 wd-icon"></i> <span
                        class="d-none d-xl-block">Messages</span></a>
                <a href="#"
                   class="list-group-item  list-group-item-action ${active == 'bookmarks' ? 'active' : ''}">
                    <i class="fas fa-bookmark fa-lg p-1 wd-icon"></i> <span
                        class="d-none d-xl-block">Bookmarks</span></a>
                <a href="#"
                   class="list-group-item list-group-item-action ${active == 'lists' ? 'active' : ''}">
                    <i class="fas fa-list fa-lg p-1 wd-icon"></i> <span
                        class="d-none d-xl-block">Lists</span></a>
                <a href="#"
                   class="list-group-item  list-group-item-action ${active == 'profile' ? 'active' : ''}">
                    <i class="fas fa-user fa-lg p-1 wd-icon"></i> <span
                        class="d-none d-xl-block">Profile</span></a>
                <a href="#"
                   class="list-group-item list-group-item-action ${active == 'more' ? 'active' : ''}">
                    <i class="fas fa-ellipsis-h fa-lg p-1 wd-icon"></i> <span
                        class="d-none d-xl-block">More</span></a>
            </div>
            <div class="d-grid mt-2">
                <a href="tweet.html"
                   class="btn btn-primary btn-block rounded-pill">
                    Tweet</a>
            </div>
    `);
}
export default NavigationSidebar;
