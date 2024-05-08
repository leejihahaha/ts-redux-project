import { TodosTypes } from "./actionTypes";

let nextId = 1;

export const create = (text: string) => ({
  type: TodosTypes.CREATE,
  //페이로드는 객체
  payload: {
    id: nextId++,
    text,
  },
});

export const remove = (id: number) => ({
  type: TodosTypes.REMOVE,
  payload: id,
});

export const edit = (id: number, text: string) => ({
  type: TodosTypes.EDIT,
  payload: id,
  text,
});

// export const filterTodos = (filter: string) => ({
//   type: TodosTypes.FILTER_TODOS,
//   payload: { filter },
// });

// export const completed = (id: number) => ({
//   type: TodosTypes.COMPLETED,
//   payload: { id },
// });

// export const incompleted = (id: number) => ({
//   type: TodosTypes.INCOMPLETED,
//   payload: { id },
// });

// export const allCompleted = () => ({
//   type: TodosTypes.ALL_COMPLETED,
// });
