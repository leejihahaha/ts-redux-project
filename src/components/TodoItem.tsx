import { Item } from "../redux/actionTypes";

interface TodoItemProps {
  todo: Item;
  // remove: (id: number) => void;
  // edit: (id: number, text: string) => void;
}

function TodoItem({ todo }: TodoItemProps) {
  console.log(todo);

  // const handleEdit = () => {
  //   edit(todo.id, todo.text);
  // };

  // const handleRemove = () => {
  //   remove(todo.id);
  // };
  return (
    <li>
      <span>{todo.text}</span>
      {/* <button type="button" onClick={handleEdit}>
        ✏
      </button>
      <button type="button" onClick={handleRemove}>
        🗑
      </button> */}
    </li>
  );
}

export default TodoItem;
