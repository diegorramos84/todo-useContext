function TodoItem({ todo, deleteTodo, completeTodo }) {
	return(
		<li className="todo">
			<span className={`todo-item ${todo.completed ? 'completed' : ''}`}>{todo.text}</span>
			<button className="trash-btn" onClick={() => deleteTodo(todo)}>Delete</button>
			<button className="complete-btn" onClick={() => completeTodo(todo)}>Complete</button>
		</li>
	)
	}

export default TodoItem;
