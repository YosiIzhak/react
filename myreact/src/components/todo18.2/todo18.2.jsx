import React, { useState } from 'react';
import './todo18.2.css'

function Todo() {
    const [todos, setTodos] = React.useState([
        { name: "CSS", completed: true },
        { name: "JavaScript", completed: true },
        { name: "Learn React", completed: false },
        { name: "Learn mongoDB", completed: false },
        { name: "Learn Node JS", completed: false },
    ]);
    const completeTodo = index => {
        const newTodos = [...todos];
        newTodos[index].completed = !(newTodos[index].completed);
        setTodos(newTodos);
      };
      function Completed({ todo, index, completeTodo, Completed }) {
        const display = Completed ? <p>&#10003;</p> : <p>&#x58;</p>

        return (
          <div
            className="todo"
            style={{ textDecoration: todo.completed ? "line-through" : "" }}
          >
            {todo.name}
            <div>
              <button onClick={() => completeTodo(index)}>{display}</button>
            </div>
          </div>
        );
      }
  
    return (
            <div className="app">
              <div className="todo-list">
                {todos.map((todo, index) => (
                  <Completed
                    key={index}
                    index={index}
                    todo={todo}
                    completeTodo={completeTodo}
                  />
                ))}
              </div>
            </div>
          );
}
export default Todo;