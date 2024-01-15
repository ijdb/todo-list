import React from "react";
import { MdDoneOutline } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";

function TodoItem({ todo, deleteItem, done }) {
	return (
		<div className="list-item-container">
			<div className="item-done" onClick={done}>
				<MdDoneOutline />
			</div>
			<div className="list-item">{todo.text}</div>
			<div className="item-delete" onClick={deleteItem}>
				<MdDeleteOutline />
			</div>
		</div>
	);
}

export default TodoItem;
