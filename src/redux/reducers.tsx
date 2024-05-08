import { TodoListActionTypes, TodosState, TodosTypes } from "./actionTypes";

const initialState: TodosState = {
  todos: [],
};

const todoReducers = (
  state = initialState,
  action: TodoListActionTypes
): TodosState => {
  switch (action.type) {
    case TodosTypes.CREATE:
      return {
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, text: action.payload.text }
            : todo
        ),
      };

    case TodosTypes.REMOVE:
      return {
        todos: state.todos.filter((todo) => {
          todo.id !== action.payload.id;
        }),
      };

    case TodosTypes.EDIT:
      return {
        todos: state.todos.map((todo) =>
          todo.id !== action.payload.id
            ? { ...todo, text: action.payload.text }
            : todo
        ),
      };

    default:
      return state;
  }
};

export default todoReducers;
