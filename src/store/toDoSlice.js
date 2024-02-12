import { createSlice } from "@reduxjs/toolkit";
import getListFromStorage from "../shared/helpers/getListFromStorage";
import { getRandomInt } from "../shared/utils";

const getListFromLS = getListFromStorage();
const initialState = { toDoList: getListFromLS };

export const toDoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addToDo: (state, action) => {
      const newId = getRandomInt();
      state.toDoList.push({ id: newId, value: action.payload, checked: false });
      console.log(state.toDoList);
    },
    onDeleted: (state, action) => {
      console.log(1);
    },
    doneNote: (state, action) => {},
  },
});

export const { addToDo, onDeleted, doneNote } = toDoSlice.actions;

export default toDoSlice.reducer;
