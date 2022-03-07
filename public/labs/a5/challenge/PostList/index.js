import PostItem from "./PostItem.js";
import posts from "./posts.js"
const PostItemList = () => {
    return (`
            <ul class="list-group">
                <li class="list-group-item">
                    ${
        posts.map(posts => {
            return(PostItem(posts));
        }).join('')
    }
                </li>      
            </ul>
    `);
}
export default PostItemList;