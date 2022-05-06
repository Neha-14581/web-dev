import * as service from '../services/tuits-service';

export const CREATE_TUIT = 'CREATE_TUIT';
export const FIND_ALL_TUITS = 'FIND_ALL_TUITS';
export const UPDATE_TUIT = 'UPDATE_TUIT';
export const DELETE_TUIT = 'DELETE_TUIT';

//export const createTuit = async (dispatch, tweet) => {}
//export const findAllTuits = async (dispatch) => {}
//export const updateTuit = async (dispatch, tweet) => {}
//export const deleteTuit = async (dispatch, tweet) => {}

export const findAllTuits = async (dispatch) => {
    const tweets = await service.findAllTuits();
    dispatch({
        type: FIND_ALL_TUITS,
        tweets
    });
}
export const deleteTuit = async (dispatch, tweet) => {
    const response = await service.deleteTuit(tweet);
    dispatch({
        type: DELETE_TUIT,
        tweet
    });
}

export const createTuit = async (dispatch, tweet) => {
    const newTweet = await service.createTuit(tweet);
    dispatch({
        type: CREATE_TUIT,
        newTweet
    });
}

export const updateTuit = async (dispatch, tweet) => {
    const status = await service.updateTuit(tweet);
    dispatch({
        type: UPDATE_TUIT,
        tweet
    });
}

