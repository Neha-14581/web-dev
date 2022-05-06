/*
import tweetsJson from '../data/tweets.json';

const tweets = (state = tweetsJson, action) => {
    switch (action.type) {
        case 'fetch-all-tweets':
            return(action.tweets
            );
            // eslint-disable-next-line no-unreachable
            break;

        case 'create-tweet':
            const tweet = {
                "_id": (new Date()).getTime(),
                "topic": "Web Development",
                "userName": "jQuery",
                "verified": false,
                "handle": "jQuery",
                "title": "jQuery",
                ...action.tweet,
                "time": "last week",
                "logo-image": "https://openjsf.org/wp-content/uploads/sites/84/2019/10/jquery-logo-vertical_large_square.png",
                "avatar-image": "../../../images/jquery.png",
                "tweets": "122K",
                "stats": {
                    "comments": 123,
                    "retweets": 234,
                    "likes": 345
                }
            };
            return ([
                    tweet,
                    ...state,
                ]
            );
            // eslint-disable-next-line no-unreachable
            break;

        case 'delete-tweet':
            return state
                .filter(tweet => tweet._id !== action.tweet._id);
            // eslint-disable-next-line no-unreachable
            break;

        case 'like-tweet':
            return state.map(tweet => {
                if(tweet._id === action.tweet._id) {
                    if(tweet.liked === true) {
                        tweet.liked = false;
                        tweet.stats.likes--;
                    } else {
                        tweet.liked = true;
                        tweet.stats.likes++;
                    }
                    return tweet;
                } else {
                    return tweet;
                }
            });
            // eslint-disable-next-line no-unreachable
            break;

        default:
            return(state);
    }
};
export default tweets;

 */

/*
const tuitsReducer = (state = [], action) => {
    switch (action.type) {
        case 'FIND_ALL_TUITS':
            return action.tuits;
        default:
            return state;
    }
}
export default tuitsReducer;

 */


/*
import tweetsJson from '../data/tweets.json';

const tuitsReducer = (state = tweetsJson, action) => {
    switch (action.type) {
        case 'fetch-all-tweets':
            return(action.tweets
            );
            break;

        case 'create-tweet':
            const tweet = {
                "_id": (new Date()).getTime(),
                "topic": "Web Development",
                "userName": "jQuery",
                "verified": false,
                "handle": "jQuery",
                "title": "jQuery",
                ...action.tweet,
                "time": "last week",
                "logo-image": "https://openjsf.org/wp-content/uploads/sites/84/2019/10/jquery-logo-vertical_large_square.png",
                "avatar-image": "../../../images/jquery.png",
                "tweets": "122K",
                "stats": {
                    "comments": 123,
                    "retweets": 234,
                    "likes": 345
                }
            };
            return ([
                    tweet,
                    ...state,
                ]
            );
            // eslint-disable-next-line no-unreachable
            break;

        case 'delete-tweet':
            return state
                .filter(tweet => tweet._id !== action.tweet._id);
            // eslint-disable-next-line no-unreachable
            break;

        case 'like-tweet':
            return state.map(tweet => {
                if(tweet._id === action.tweet._id) {
                    if(tweet.liked === true) {
                        tweet.liked = false;
                        tweet.stats.likes--;
                    } else {
                        tweet.liked = true;
                        tweet.stats.likes++;
                    }
                    return tweet;
                } else {
                    return tweet;
                }
            });
            // eslint-disable-next-line no-unreachable
            break;

        default:
            return(state);
    }

};


export default tuitsReducer;

 */




//import tweetsJson from '../data/tweets.json';

/*
import {CREATE_TUIT, DELETE_TUIT, FIND_ALL_TUITS,UPDATE_TUIT}
    from "../../../actions/tuits-actions";
const tweets = (state = [], action) => {
    switch (action.type) {
        case FIND_ALL_TUITS:
            return action.tuits;
        case DELETE_TUIT:
            return state.filter(
                tuit => tuit._id !== action.tuit._id);
        case CREATE_TUIT:
            return [
                ...state,
                action.newTuit
            ];
        case UPDATE_TUIT:
            return state.map(
                tuit => tuit._id === action.tuit._id ?
                    action.tuit : tuit);
    }
}


export default tweets;


 */



//import tweetsJson from '../data/tweets.json';
import {UPDATE_TUIT,CREATE_TUIT,DELETE_TUIT,FIND_ALL_TUITS}
    from "../../../actions/tuits-actions";

const tweets = (state = [], action) => {
    switch (action.type) {
        case 'FIND_ALL_TUITS':
            return action.tweets;
        case DELETE_TUIT:
            return state.filter(
                tweet => tweet._id !== action.tweet._id);
        case CREATE_TUIT:
            return [
                ...state,
                action.newTweet
            ];
        case UPDATE_TUIT:
            return state.map(
                tweet => tweet._id === action.tweet._id ?
                    action.tweet : tweet);
        default:
            return(state);
    }

}
export default tweets;

