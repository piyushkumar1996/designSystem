import React, { useRef, useMemo, useCallback } from "react";
import "./todo.css";

/*

- ally

1. aria-label - meaning for non semantic tags
2. role - region, group, status
3. aria-live='polite' - for anouncement
4. button, input accessable with tabs
5. make use of semantic tags - main, nav, button, input, header, footer
6. visually hidden labels for information
7. Have a proper colour contrast

- Optimisation:

1. add key in the list item
2. pagination/infinite scroll and dont load all content once
3. Rendering optimisation: Virtualization to minimize the number of nodes
4. React.memo for individual todo item

*/

const TodoItem = ({ item, handleAction, todoContentRef }) => {
  return (
    <div role="group" aria-label={`Todo ${item.content}`} key={item.id}>
      <input
        className="todoItem"
        type="checkbox"
        id={item.id}
        checked={item.status === "completed"}
        aria-checked={item.status === "completed"}
        aria-label={`mark ${item.content} completed`}
        onChange={() => handleAction(item, "MARK_TODO_COMPLETE")}
      />
      <input
        ref={(el) => (todoContentRef.current[item.id] = el)}
        type="text"
        disabled={item.status === "completed"}
        defaultValue={item.content}
        aria-label={item.content}
      />
      <button
        aria-label={`edit ${item.content}`}
        onClick={() => handleAction(item, "EDIT_TODO")}
      >
        UPDATE
      </button>
      <button
        aria-label={`delete ${item.content}`}
        onClick={() => handleAction(item, "REMOVE_TODO")}
      >
        DELETE
      </button>
    </div>
  );
};

const TodoList = ({ todoList = [], dispatch, filter }) => {
  const todoContentRef = useRef({});

  const handleAction = useCallback(
    (item, type) => {
      if (type === "MARK_TODO_COMPLETE")
        dispatch({ type, payload: { id: item?.id } });
      else if (type === "EDIT_TODO")
        dispatch({
          type,
          payload: { ...item, content: todoContentRef.current[item.id].value },
        });
      else if (type === "REMOVE_TODO")
        dispatch({ type, payload: { id: item.id } });
    },
    [dispatch]
  );

  const filteredTodos = useMemo(() => {
    if (filter === "all") return todoList;
    return todoList.filter((todo) => todo.status === filter);
  }, [todoList, filter]);

  return (
    <div role="region" aria-label="Todo list">
      {filteredTodos.length > 0 ? (
        filteredTodos.map((item) => (
          <TodoItem
            item={item}
            handleAction={handleAction}
            todoContentRef={todoContentRef}
          />
        ))
      ) : (
        <p role="status">No todo found</p>
      )}
    </div>
  );
};

export default TodoList;
