import { createContext } from "react";

export const TodoContext = createContext({
  todos: [],
  handleAddTodo: () => {},
  handleDelete: () => {},
});