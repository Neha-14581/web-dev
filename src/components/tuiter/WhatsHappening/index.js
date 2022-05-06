import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {createTuit} from "../../../actions/tuits-actions";

const WhatsHappening = () => {
    let [whatsHappening, setWhatsHappening] = useState('');
    const dispatch = useDispatch();
    const tweetClickHandler = () => {
        dispatch({type: 'create-tweet',
            tweet: {
                tweet: whatsHappening
            }
        });
    }

    const [newTweet, setNewTweet] =
        useState({tweet: 'New tweet'});
    return(
        <>
            <table style={{marginBottom: '16px'}}>
                <tr>
                    <td style={{verticalAlign: 'top'}}>
                        <img src={"https://pbs.twimg.com/profile_images/1442634650703237120/mXIcYtIs_400x400.jpg"}
                             className="rounded-circle"
                             style={{width: '48px', margin: '16px'}}/>
                    </td>
                    <td style={{width: "100%"}}>
{/*                        <textarea*/}
{/*                                  // onChange={(event) => setWhatsHappening(event.target.value)}*/}
{/*                                  // className="form-control"*/}
{/*                                  // style={{width: "100%", color: "white",*/}
{/*                                  //     padding: "0px",*/}
{/*                                  //     paddingTop: "15px",*/}
{/*                                  //     backgroundColor: "black"}}*/}
{/*                                  // placeholder="What's happening?"></textarea>*/}

{/*                                  onChange={(e) =>*/}
{/*                                      setNewTuit({newTuit,*/}
{/*                                          tweet: e.target.value})}>*/}
{/*                                  className="form-control w-75"*/}
{/*                                  style={{width: "100%", color: "white",*/}
{/*                                          padding: "0px",*/}
{/*                                          paddingTop: "15px",*/}
{/*                                        backgroundColor: "black"*/}
{/*}}*/}
{/*                                     placeholder="What's happening?">*/}
{/*                        </textarea>*/}
                        <textarea
                            onChange={(e) =>
                                setNewTweet({...newTweet,
                                    tweet: e.target.value})}
                            className="form-control w-75"
                            style={{
                                width: "100%", color: "white",
                                padding: "0px",
                                paddingTop: "15px",
                                backgroundColor: "black"
                            }}
                            placeholder="What's happening?">
                        </textarea>
                        <hr/>
                        <span>
                            <a href="#"><i className="far fa-image me-3"></i></a>
                            <a href="#"><i className="far fa-analytics me-3"></i></a>
                            <a href="#"><i className="far fa-smile me-3"></i></a>
                            <a href="#"><i className="far fa-calendar me-3"></i></a>
                        </span>
                        {/*<button onClick={tweetClickHandler} className="btn btn-primary fa-pull-right rounded-pill">*/}
                        {/*    Tweet*/}
                        {/*</button>*/}
                        <button onClick={() =>
                            createTuit(dispatch, newTweet)}
                                className="btn btn-primary float-end">
                            Tweet
                        </button>
                    </td>
                </tr>
            </table>
        </>
    );
}

export default WhatsHappening;