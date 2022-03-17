import React from "react";
import Classes from "./classes";
import Styles from "./styles";
import ConditionalOutput from "./conditional-output";
import TodoList from "./todo/TodoList";
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
            </div>
            <Link to="/hello">
                Hello
            </Link> |
            <Link to="/tuiter/home">
                Tuiter
            </Link>
        </>

    )
};

export default Index;
