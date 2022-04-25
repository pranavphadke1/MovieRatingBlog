import React from "react";
import Classes from "./classes";
import Styles from "./styles";
import ConditionalOutput from "./conditional-output";
import TodoList from "./todo/TodoList";
import ReduxExamples from "./redux-examples";
import {Link} from "react-router-dom";

const Index = () => {
    return (
        <>
            <div>
                <h1>Labs</h1>
                <ConditionalOutput/>
                <Styles/>
                <Classes/>
                <TodoList/>

                <ReduxExamples/>

            </div>
            <Link to="/hello">
                Hello
            </Link> |
            <Link to="/tuiter">
                Tuiter
            </Link>
        </>

    )
};

export default Index;
