import { MdDelete } from "react-icons/md";
import { TodoContext } from "../context/store";
import { useContext } from "react";

function TodoItem({ title, date }) {
  const {handleDelete} = useContext(TodoContext)
  return (
    <div className="item-container flex justify-between items-center gap-5 m-2 p-4 bg-gray-100 rounded-lg shadow-md">
      <div className="todo-title flex-1 text-center">{title}</div>
      <div className="todo-date flex-1 text-center">{date}</div>
      <div className="todo-delete">
        <button className="bg-red-800 px-4 py-2 text-white rounded-lg" onClick={()=>handleDelete(title)}><MdDelete/></button>
      </div>
    </div>
  );
}

export default TodoItem;