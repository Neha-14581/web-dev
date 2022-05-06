import React, {useEffect} from "react";
import {useDispatch,useSelector} from "react-redux";
//import * as service from '../../../services/tuits-service';
import {findAllTuits}
    from "../../../actions/tuits-actions";
import TweetListItem from "./TweetListItem";
//import {create}
//const selectAllTweets = (state) => state.tweets;

const TweetList = () => {
    const tweets = useSelector(state => state.tweets);
    const dispatch = useDispatch();

    // const [newTweet, setNewTweet] =
    //     useState({tweet: 'New tweet'});
    /*
    const findAllTuits = async () => {
        const tweets = await service.findAllTuits();
        dispatch({
            type: 'FIND_ALL_TUITS',
            tweets: tweets
        });
    }
    useEffect(findAllTuits, []);

     */

    useEffect(() =>
            findAllTuits(dispatch),
        []);

    // const [newTuit, setNewTuit] = useState({tuit: 'New tuit'});

    return(
        <>
            <ul className="list-group">
                {
                    tweets.map(tweet =>
                        <TweetListItem tweet={tweet}/>
                    )
                }
            </ul>
        </>
    )
};

export default TweetList;
