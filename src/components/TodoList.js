import React from "react";
// Importing components
import Todo from "./Todo"

const TodoList = ({todos, setTodos}) => {
  // console.log(todos)
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {todos.map(todo => (
          <Todo
            todos={todos}
            setTodos={setTodos}
            text={todo.text}
            key={todo.id}
            todo={todo}
          />
        ))}
      </ul>
    </div>
  )
}

export default TodoList