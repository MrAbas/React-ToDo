import { RootState } from ".";

export const modalShowSelector = (state: RootState) => {
  return state.todo.modalShow;
};
