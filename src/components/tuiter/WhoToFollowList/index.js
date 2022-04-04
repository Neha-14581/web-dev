import React from "react";
import WhoToFollowListItem from "./WhoToFollowListItem";
import {useSelector} from "react-redux";

const selectAllWho = (state) => state.who;

const WhoToFollowList = () => {
    const who = useSelector(selectAllWho);
    return (
        <ul className="list-group">
            <li className="list-group-item fw-bold">
                Who to follow
            </li>
            {
                who.map(who => {
                    return(
                        <WhoToFollowListItem who={who}/>
                    );
                })
            }
        </ul>
    );
}

export default WhoToFollowList;
/*
import React from "react";
import WhoToFollowListItem from "./WhoToFollowListItem";
import who from "../data/who.json";

const WhoToFollowList = () => {
    return (
        <ul className="list-group">
            <li className="list-group-item fw-bold">Who To Follow</li>
            <li className="list-group-item">
                {
                    who.map(who => {
                        return(
                            <WhoToFollowListItem who={who}/>
                        );
                    })
                }
            </li>
        </ul>
    );
}
export default WhoToFollowList;

 */
