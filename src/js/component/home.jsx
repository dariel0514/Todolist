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
}
};

const deleteTasks = (id) => {
	let filteredTask = tasks.filter( task => task.id !== id );
	setTasks(filteredTask)
}

return(
	<div className="text-center">
		<h1 className="todo">todos</h1>
		<div className="list-card">
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					value={input}
					onChange={event => setInput(event.target.value)}
					className="input-box"
					placeHolder="What needs to be done?"
					/>
			</form>
	<div className="list-items">
		{tasks.map((task)=>{
			<div className="todo" key={task.id}>
				<p>{task.text}
				<button
				className="button"
				onClick={ () => deleteTask(task.id) }>
					&#10060;
				</button>
				</p>
			</div>
})}
		<p className="counter">{ tasks.leng === 1 ? "one task left" : `tasks left: ${tasks.length}`}</p>
	</div>
	</div>
	</div>
);
};


export default Home;
