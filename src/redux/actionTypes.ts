export enum TodosTypes { //enum: (상수)들의 집합
  CREATE = "CREATE",
  REMOVE = "REMOVE",
  EDIT = "EDIT",
  //   FILTER_TODOS = "FILTER_TODOS",
  //   COMPLETED = "COMPLETED",
  //   INCOMPLETED = "INCOMPLETED",
  //   ALL_COMPLETED = "ALL_COMPLETED",
}

export interface TodoListActionTypes {
  type: string;
  payload: Item;
  todos: Item[];
}

export interface Item {
  id: number;
  text: string;
  //   completed: boolean;
  //   filter: string;
}

export interface TodosState {
  todos: Item[];
}
