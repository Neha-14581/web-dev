
import PostSummaryItem from "./PostSummaryItem.js";
import post from "./post.js";

const PostSummaryList = () => {
    return (`
            <ul class="list-group">
                <li class="list-group-item fw-bold">
                <li class="list-group-item">
                    ${
        post.map(post => {
            return(PostSummaryItem(post));
        }).join('')
    }
                    </li>
                </li>
            
            </ul>
            `);
}
export default PostSummaryList;