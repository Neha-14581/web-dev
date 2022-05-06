import React from "react";
import {useDispatch} from "react-redux";
import {updateTuit} from "../../../actions/tuits-actions";

const TweetStats = ({tweet}) => {
    const dispatch = useDispatch();

    // const likeClickHandler = () => {
    //     dispatch({type: 'like-tweet', tweet});
    // };

    return (<div className="row mt-2">
        <div className="col">
            <i className="fa fa-comment me-2"></i>
            {tweet.comments}
        </div>
        <div className="col">
            <i className="fa fa-retweet me-2"></i>
            {tweet.retweets}
        </div>
        {/*<div className="col" onClick={likeClickHandler}>*/}
        {/*    {*/}
        {/*        tweet.liked &&*/}
        {/*        <i className="fa fa-heart me-2"*/}
        {/*           style={{color: tweet.liked ? 'red': "white"}}></i>*/}
        {/*    }*/}
        {/*    {*/}
        {/*        !tweet.liked &&*/}
        {/*        <i className="fa fa-heart me-2"></i>*/}
        {/*    }*/}
        {/*    {tweet.stats.likes}*/}
        {/*</div>*/}

        <div className="col">

            <label>
                {tweet.likes}
                <i onClick={() => updateTuit(dispatch, {
                    ...tweet,
                    likes: tweet.likes + 1
                })} className="far fa-thumbs-up ms-3 me-2"></i>
            </label>
        </div>

        <div className="col">

            <label>
                {tweet.dislikes}
                <i onClick={() => updateTuit(dispatch, {
                    ...tweet,
                    dislikes: tweet.dislikes + 1
                })} className="far fa-thumbs-down ms-3 me-2"></i>
            </label>
        </div>


        <div className="col">
            <i className="fa fa-external-link-alt me-2"></i>
        </div>
    </div>)
}

export default TweetStats;