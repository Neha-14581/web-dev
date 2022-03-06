import PostSummaryList from "../PostSummaryList";

const ExploreComponent = () => {
    return(`
            <div class="row">
                       <!-- search field and cog -->
                       
                       <div class="row">
                <div class="border rounded-pill border-white bg-white">
                    <div class="input-group wd-search border-white ">
                        <button class="btn btn-default" type="submit"><i class="fas fa-search"></i></button>
                        <input type="text" class="form-control" placeholder="Search Tuiter">
                        <a href="explore-settings.html" class="btn btn-info bg-white border-white" role="button"><i class="fa fa-cog"></i></a>
                    </div>
                </div>
            </div>
           </div>
           
           <ul class="nav mb-2 nav-tabs">
                      <!-- tabs -->
                      
                      
                      <li class="nav-item">
                            <a class="nav-link active" href="#">For You</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Trending</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">News</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Sports</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Entertainment</a>
                        </li>
           </ul>
           <!-- image with overlaid text -->
           
           <li class="list-group-item">
                        <img src="../spaceship.jpg" style="width: 100%; height: 100%">
                        <div class="carousel-caption bottom-0"><h3>SpaceX's Starship</h3></div>
                    </li>
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;
