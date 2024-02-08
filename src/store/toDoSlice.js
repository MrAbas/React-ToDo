import { createSlice } from "@reduxjs/toolkit";
import { getRandomInt } from "../shared/utils";
import getListFromStorage from "../shared/helpers/getListFromStorage";

const getListFromLS = getListFromStorage();
const initialState = { toDoList: getListFromLS };

export const toDoSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addToDo: (state, action) => {
      const newId = getRandomInt();
      state.toDoList.push({ id: newId, value: action.payload, checked: false });
    },
    onDeleted: (state, action) => {
      const deletedNotes = state.toDoList.filter((i) => {
        return i.id !== Number(action.payload);
      });
      state.toDoList = deletedNotes;
    },
  },
});

export const { addToDo, onDeleted } = toDoSlice.actions;

export default toDoSlice.reducer;
