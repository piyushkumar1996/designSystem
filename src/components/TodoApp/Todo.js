import React, { useEffect, useReducer } from "react";
import { initialState, todoReducer } from "../../store/reducers/todoReducer";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import TodoFilter from "./TodoFilter";
import './todo.css';

const Todo = () => {
  const [state, dispatch] = useReducer(todoReducer, initialState, (init) => {
    const saved = JSON.parse(localStorage.getItem("todoData"));
    console.log("saved", saved);
    return saved ? saved : init;
  });

  useEffect(() => {
    localStorage.setItem("todoData", JSON.stringify(state));
  }, [state]);

  console.log("todo state", state);
  return (
    <div className="todoContainer">
      <h1>Todo List App</h1>
      <TodoFilter dispatch={dispatch} filter={state.filter} />
      <TodoList
        todoList={state.todoList}
        dispatch={dispatch}
        filter={state.filter}
      />
      <TodoForm currentTodo={state.currentTodo} dispatch={dispatch} />
    </div>
  );
};

export default Todo;