import React, { useEffect, useRef, useState } from "react";
import TodoItem from "./TodoItem";

function TodoComponent() {
	const [todos, setTodos] = useState([]);
	const [newTodo, setNewTodo] = useState("");
	const inputRef = useRef(null);

	useEffect(() => {
		inputRef.current.focus();
	}, []);

	const handleAddTodo = () => {
		if (newTodo.trim()) {
			setTodos([...todos, { text: newTodo, completed: false }]);
			setNewTodo("");
		}
		inputRef.current.focus();
	};
	const handleKeyPress = (e) => {
		if (e.key === "Enter") {
			handleAddTodo();
		}
	};

	return (
		<div>
			<div className="todo-title">Todo List</div>
			<input
				type="text"
				value={newTodo}
				onChange={(e) => setNewTodo(e.target.value)}
				ref={inputRef}
				onKeyDown={handleKeyPress}
			/>
			<button onClick={handleAddTodo}>Add</button>
			<div className="todo-list">
				{todos.map((todo, index) => (
					<TodoItem key={index} todo={todo} />
				))}
			</div>
		</div>
	);
}

export default TodoComponent;
