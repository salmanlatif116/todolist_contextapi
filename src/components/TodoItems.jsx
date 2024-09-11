import { useContext } from "react";
import { TodoContext } from "../context/store";
import TodoItem from "./TodoItem";


function TodoItems() {
  const {todos} = useContext(TodoContext)
  return (
    <div className="todo-items-container">
      {todos.map((value, index) => (
        <div key={index}>
          <TodoItem title={value.title} date={value.date}/>
        </div>
      ))}
    </div>
  );
}

export default TodoItems;
