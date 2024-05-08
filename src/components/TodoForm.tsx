import { ChangeEvent, FormEvent, useState } from "react";

interface TodoInsertProps {
  onInsert: (text: string) => void;
}

function TodoForm({ onInsert }: TodoInsertProps) {
  const [newTodo, setNewTodo] = useState("");
  console.log(newTodo);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    onInsert(newTodo);
    setNewTodo("");
  };

  return (
    <div>
      <h2>TodoList</h2>

      <form onSubmit={onSubmit}>
        <input
          value={newTodo}
          onChange={onChange}
          type="text"
          placeholder="해야 할 일"
        />
        <button type="submit">➕</button>
      </form>
    </div>
  );
}

export default TodoForm;
