import { Item } from "../redux/actionTypes";
import TodoItem from "./TodoItem";

interface TodoListProps {
  todo: Item[];
  // remove: (id: number) => void;
  // edit: (id: number) => void;
}

function TodoList({ todo }: TodoListProps) {
  return (
    <ul>
      {todo.map((it) => (
        <TodoItem key={it.id} todo={it} />
      ))}
    </ul>
  );
}

export default TodoList;
