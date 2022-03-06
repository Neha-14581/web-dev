
import PostItem from "./PostItem.js";
import posts from "./posts.js";

const PostList = () => {
    return (`
            <ul class="list-group">
                <li class="list-group-item fw-bold">
                <li class="list-group-item">
                    ${
        posts.map(post => {
            return(PostItem(post));
        }).join('')
    }
                    </li>
                </li>
            
            </ul>
            `);
}
export default PostList;