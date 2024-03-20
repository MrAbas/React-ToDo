import { RootState } from ".";

export const modalShowSelector = (state: RootState) => {
  return state.todo.modalShow;
};

export const currentTodosSelector = (state: RootState) => {
  return state.todo.currentTodos;
};

export const initialTodosSelector = (state: RootState) => {
  return state.todo.initialTodos;
};

export const todosAsyncSelector = (state: RootState) => {
  return state.todo.todoAsync;
};

export const commentsAsyncSelector = (state: RootState) => {
  return state.todo.commentAsync;
};

export const paginationNumberSelector = (state: RootState) => {
  return state.todo.paginationNumber;
};

export const statusSelector = (state: RootState) => {
  return state.todo.status;
};
export const errorSelector = (state: RootState) => {
  return state.todo.error;
};
