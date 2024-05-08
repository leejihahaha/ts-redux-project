import { useDispatch } from "react-redux";
import TodoForm from "../components/TodoForm";
import { create } from "../redux/actions";
import TodoList from "../components/TodoList";
import { useSelector } from "react-redux";
import { RootState } from "../redux";

function TodoMain() {
  const todo = useSelector((state: RootState) => state.todos);
  const dispatch = useDispatch();

  const onInsert = (text: string) => {
    dispatch(create(text));
  };

  // const edit = (id: number text: string) => {
  //   dispatch(edit(id,text));
  // };

  // const remove = (id: number) => {
  //   dispatch(remove(id));
  // };
  return (
    <>
      <TodoForm onInsert={onInsert} />
      <TodoList todo={todo} />
    </>
  );
}

export default TodoMain;
