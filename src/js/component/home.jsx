import React, { useState } from "react";

const Home = () => {
const [tasks, setTasks] = useState([])
const [input, setInput] = useState("")
const handleSubmit = (event) => {
	event.preventDefault()
	if (input != ""){
		let addTask = {
		id: Math.floor(Math.random() * 1000),
		text: input,
		completed: false 
	}
	
	setTasks([...tasks, addTask])
	setInput("")
}
};

const deleteTasks = (id) => {
	let filteredTask = tasks.filter( task => task.id !== id );
	setTasks(filteredTask)
}

console.log("This is input: " ,input)
console.log("This is tasks: " ,tasks)

return(
	<div className="text-center">
		<h1 className="todo">todos</h1>
		<div className="list-card">
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					value={input}
					onChange={event => {
						console.log(event.target.value)
						setInput(event.target.value)}}
					className="input-box"
					placeHolder="What needs to be done?"
					/>
			</form>
	<div className="list-items">
		{tasks.map((task)=>(
			<div className="todo" key={task.id}>
				<p>{task.text}
				<button
				className="button"
				onClick={ () => deleteTasks(task.id) }>
					&#10060;
				</button>
				</p>
			</div>
)
)}
		<p className="counter">{ tasks.length > 0 ? `tasks left: ${tasks.length}` : "No Tasks, Please add a task"}</p>
	</div>
	</div>
	</div>
);
};


export default Home;
