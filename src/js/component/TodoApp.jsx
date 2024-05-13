import React,  { useState } from "react";
import TodoBody from "./TodoBody";
import TodoHeader from "./TodoHeader";
import TodoFooter from "./TodoFooter";
//styles 
import '../../styles/TodoApp.css'


// const TASKS = [
//     // {id: 0, task: "Wash car"},
//     // {di: 1, task:"Do homework"},
//     // {id: 2, task: "Mow the lawn"},
// ]

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
	return (
	<>

<div className="todos-wrapper">
    <TodoHeader todos={todos}setTodos={setTodos}/>


<div>
  <TodoBody todos={todos}setTodos={setTodos} />

</div>
<div>
    <TodoFooter todos={todos}/>
    </div>
    </div>
	</>
	);
};

export default TodoApp;