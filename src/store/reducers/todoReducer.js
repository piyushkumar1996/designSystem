const emptyTodo = {
  content: "",
  id: "",
  status: "active",
};

export const initialState = {
  todoList: [
    {
      id: 1,
      content: "Sample Todo",
      status: "active",
    },
  ],
  currentTodo: emptyTodo,
  filter: "all", // "all" | "active" | "completed"
};

export const todoReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD_TODO": {
      return {
        ...state,
        todoList: [...state.todoList, payload],
        currentTodo: { ...emptyTodo },
      };
    }

    case "REMOVE_TODO": {
      return {
        ...state,
        todoList: state.todoList.filter((item) => item.id !== payload.id),
        currentTodo: { ...emptyTodo },
      };
    }

    case "MARK_TODO_COMPLETE": {
      return {
        ...state,
        todoList: state.todoList.map((item) =>
          item.id === payload.id
            ? {
                ...item,
                status: item.status === "completed" ? "active" : "completed",
              }
            : item
        ),
        currentTodo: { ...emptyTodo },
      };
    }

    case "EDIT_TODO": {
      return {
        ...state,
        todoList: state.todoList.map((item) =>
          item.id === payload.id ? payload : item
        ),
        currentTodo: { ...emptyTodo },
      };
    }

    case "FILTER_TODO": {
      return {
        ...state,
        filter: payload.status, // 'all', 'active', or 'completed'
      };
    }

    default:
      return state;
  }
};
