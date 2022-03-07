const PostItem = (posts) => {
    return(`
                    <div class = "row">
                    <div class = "col-2">
                    
                    <div><img class="wd-profilepic" src="${posts.profilepic}"></div>
                    </div>
                        <!--<div>-->
                        <div class = "col-10">
                            <div class="wd-txt-book">
                                <span class="fw-bold"> ${posts.userName} </span><i class="fas fa-check-circle"></i> <span class="wd-txt-clr text-muted">${posts.handle} &#183; ${posts.time} <span class=" wd-circle wd-circle-align"></span></span>
                            </div>
                            
                            <div class="wd-txt-book">
                                ${posts.textbflink} <a href="#">${posts.link}</a> ${posts.textafterlink}    
                            </div>
                            </div>
                            </div>
                            <div class = "row">
                            <div class="col-1">
                          
                             </div>
                             
                             <div class ="col-11 border border-secondary">
                             
  <img class="wd-card-img-top" src="${posts.cardpic}" alt="Card image cap">
  <div class="wd-card-body">
    <h6 class="wd-card-title fw-bold">${posts.cardtitle}</h6>
    </div>
    <p class="wd-card-text">${posts.cardtext}</p>
    <div class="row">
    <div class="col-3">
     <i class="far fa-comment"></i> ${posts.comment}
</div> 
<div class="col-3">
     <i class="fas fa-retweet"></i> ${posts.retweet}
</div> 
<div class="col-3">
     <i class="fas fa-heart"></i> ${posts.heart}
</div> 
<div class="col-3">
     <i class="fas fa-share"></i></i>
</div> 

</div> 
</div>
</div>
<br>
        `);
}
export default PostItem;