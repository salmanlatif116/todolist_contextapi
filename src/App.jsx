import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import TodoHeading from "./components/TodoHeading";
import { useState } from "react";
import { TodoContext } from "./context/store";

function App() {
  const [todos, setTodos] = useState([])

  const handleAddTodo = (title, date) => {
    const newTodo = [{title: title, date: date}, ...todos]
    setTodos(newTodo)

  }
  const handleDelete = (title) => {
    const newTodosArr = todos.filter(item=> item.title!==title)
    setTodos(newTodosArr)
  }
  

  return (
    <TodoContext.Provider value={{todos, handleAddTodo, handleDelete}}>
        <TodoHeading />
        <AddTodo />
        <TodoItems />
    </TodoContext.Provider>
  );
}

export default App;
