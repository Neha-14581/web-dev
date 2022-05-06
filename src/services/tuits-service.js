import axios from 'axios';
const TUITS_API = 'http://localhost:4000/api/tuits';

//export const createTuit = async (tuit) => {}
//export const findAllTuits = async () => {}
//export const deleteTuit = async (tuit) => {}
//export const updateTuit = async (tuit) => {}

export const findAllTuits = async () => {
    const response = await axios.get(TUITS_API);
    const tweets = response.data;
    return tweets;
}

export const deleteTuit = async (tuit) => {
    const response = await axios
        .delete(`${TUITS_API}/${tuit._id}`);
    return response.data;
}

export const createTuit = async (tweet) => {
    const response = await axios.post(TUITS_API, tweet)
    return response.data;
}


export const updateTuit = async (tweet) => {
    const response = await axios
        .put(`${TUITS_API}/${tweet._id}`, tweet);
    return response.data;
}
