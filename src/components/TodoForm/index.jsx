import { useContext } from "react";
import { Context } from "../../App";

function TodoForm({ inputText, setInputText, setTodos, setStatus }) {
  const {todos} = useContext(Context)

  function handleInput(e) {
    setInputText(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setTodos([
     ...todos,
     {text: inputText, completed: false}
    ])
    setInputText('')
  }

  function handleStatus(e) {
    setStatus(e.target.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input value={inputText} type="text" className="todo-input" onChange={handleInput} />
      <button type="submit" className="todo-button">Add</button>
      <div className="select">
        <select onChange={handleStatus} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  )
}

export default TodoForm;
