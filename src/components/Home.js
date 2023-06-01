import { useState } from "react";
import List from "./List";
import Button from "./Button";
import Form from "./Form";
import todoData from "../data/Todo";

const Home =() => {
    const [todo, setTodo] = useState(todoData);
    return (
        <div className="container">
            <Form />
            <List todo={todo} />
        </div>
    )
};

export default Home;