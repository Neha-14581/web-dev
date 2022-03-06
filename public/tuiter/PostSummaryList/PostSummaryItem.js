const PostSummaryItem = (post) => {
    return(`
    <li class="list-group-item">
    <div class="row">
        <div class="col-md-10">
                                <span>
                                    <small class="text-muted">${post.topic}</small>
                                </span>
            <br>
                                <span class="fw-bold">${post.userName}<i class="fas fa-check-circle ms-3"></i>
                                <small class="text-muted fw-light ms-2">${post.time}</small>
                                </span>
                <br>
                    <p class="fw-bold">${post.title}</p>
        </div>
        <div class="col-md-2">
            <img class="rounded" src="${post.image}" style="height: 100%; width: 100%"/>
        </div>
    </div>
</li>
                 
        `);
}
export default PostSummaryItem;










