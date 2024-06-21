import React, { useState } from "react";
import "../../styles/TodoHeader.css";
  


const TodoHeader = ({todos, setTodos}) => {

const [newTask, setNewTask] = useState("");
const [idCounter, setIdCounter] = useState(0)


const addTask = (e) => {
	let newTodoObject = {
		id: idCounter,
		title: newTask,

	}
if (e.key == "Enter" && newTask != "") {

	setTodos([...todos, newTodoObject]);
	setIdCounter(idCounter + 1);
	setNewTask("")
	
}

	

}

 
	return (
	<>
	<header className="header">
<h1>todos</h1>
<input className="task-input" type="text"
 placeholder="What needs to be done?"
  value={newTask} onChange={event => setNewTask(event.target.value)} onKeyDown = {(e) => addTask(e)}/>


    </header>
	</>
	);
};

export default TodoHeader;