import { useState } from "react";
const Item = ({todo}) => {
    //const [title, setTitle] = useState("Title");
    //const [task, setTask] = useState("Task");

    return (
        <div style={{ backgroundColor: "#1c1c1c" }} className="todo-card">
            <div className="title">{todo.title}</div>
            <div className="task">{todo.task}</div>
        </div>
    )
};

export default Item;