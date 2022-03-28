import React from "react";
import {Link} from "react-router-dom";
import Classes from "../../a6/labs/classes";
import Styles from "../../a6/labs/styles";
import ConditionalOutput from "../../a6/labs/conditional-output";
import TodoList from "../../a6/labs/todo/todo-list";
import TodoItem from "../../a6/labs/todo/todo-item";
import ReduxExamples from "./redux-examples";

const LabsA7 = () => {
    return(
        <div>
            <h1>Labs</h1>
            <Link to="/hello">
                Hello
            </Link> |
            <Link to="/tuiter">
                Build
            </Link>
            <Classes/>
            <Styles/>
            <ConditionalOutput/>
            <TodoList/>
            <TodoItem/>
            <ReduxExamples/>
        </div>
    )
};


export default LabsA7;