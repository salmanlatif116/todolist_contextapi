import { useState } from "react";
import { IoIosAddCircle } from "react-icons/io";
import { TodoContext } from "../context/store";
import { useContext } from "react";

function AddTodo() {
  const {handleAddTodo} = useContext(TodoContext)
  const [title, setTitle] = useState("")
  const [date, setDate] = useState("")

  const handleTitleChange = (event) => {
    const newTitle = event.target.value
    setTitle(newTitle) 

  }

   const handleDateChange = (event) => {
    const newDate = event.target.value
    setDate(newDate) 

  }

  const handleAddNewTodo = (title, date) => {
    handleAddTodo(title,date)
    setTitle("")
    setDate("")
  }

  return (
    <div className="container flex justify-center m-10">
      <div className="add-todo-container flex flex-col md:flex-row gap-3 w-full md:w-2/3 lg:w-1/2">
        <input 
          type="text" 
          className="w-full h-12 bg-slate-400 rounded-2xl p-3 text-black" 
          placeholder="Enter todo title"
          value={title}
          onChange={handleTitleChange}
        />
        <input 
          type="date" 
          className="w-full h-12 bg-slate-400 rounded-2xl p-3"
          value={date}
          onChange={handleDateChange}
        />
        <button className="bg-green-500 rounded-2xl px-10 h-12 text-white" onClick={()=>handleAddNewTodo(title, date)}>
          <IoIosAddCircle />
        </button>
      </div>
    </div>
  );
}

export default AddTodo;
