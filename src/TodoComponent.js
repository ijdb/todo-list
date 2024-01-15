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
		if (newTodo.trim() !== "") {
			setTodos([
				...todos,
				{ text: newTodo.substring(1, 14), completed: false },
			]);
			setNewTodo("");
		}
		inputRef.current.focus();
	};
	const handleKeyPress = (e) => {
		if (e.key === "Enter") {
			handleAddTodo();
		}
	};
	const handleDelete = (indexToDelete) => {
		setTodos(todos.filter((_, index) => index !== indexToDelete));
		inputRef.current.focus();
	};
	const handleToggle = (index) => {
		const updatedTodos = [...todos];
		updatedTodos[index].completed = !updatedTodos[index].completed;
		setTodos(updatedTodos);
	};
	return (
		<div className="parent-container">
			<div className="todo-title">Todo List</div>
			<input
				type="text"
				name="todo"
				value={newTodo}
				onChange={(e) => setNewTodo(e.target.value)}
				ref={inputRef}
				onKeyDown={handleKeyPress}
			/>
			<button onClick={handleAddTodo}>+ Add</button>
			<div className="todo-list">
				{todos.map((todo, index) => (
					<TodoItem
						key={index}
						todo={todo}
						deleteItem={() => handleDelete(index)}
						done={() => handleToggle(index)}
					/>
				))}
			</div>
		</div>
	);
}

export default TodoComponent;
