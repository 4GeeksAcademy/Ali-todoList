import React, { useState } from "react";
import "../../styles/TodoHeader.css";
  


const TodoHeader = ({todos, setTodos}) => {

const [newTask, setNewTask] = useState("");
const [idCounter, setIdCounter] = useState(0)


const addTask = () => {
	// console.log("Creating new task: ", newTask);

	let newTodoObject = {
		id: idCounter,
		title: newTask,
	}
//the ... todos, the dots are what we call the spread operator
//The spread operator expands the array into its elements
//and then newTodoObject is added at the end of the array.
//it is a way to push into an array.
	setTodos([...todos, newTodoObject]);
	setIdCounter(idCounter + 1);
	

}
//text validation
const checkTextBox = () => {
let textBox = document.querySelector(".task-input");
	if (textBox.value === "") {
		alert("Please add a task.")
	} else {
		addTask();
		setNewTask("");
	}


} 
	return (
	<>
	<header className="header">
<h1>todos</h1>
<input className="task-input" type="text"
 placeholder="What needs to be done?"
  value={newTask} onChange={event => setNewTask(event.target.value)}/>

<button onClick={checkTextBox}>Add Task</button>
    </header>
	</>
	);
};

export default TodoHeader;