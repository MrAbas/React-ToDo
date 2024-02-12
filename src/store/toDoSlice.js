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
    },
    onDeleted: (state, action) => {
      const deletedNotes = state.toDoList.filter(
        (i) => i.id !== Number(action.payload)
      );
      state.toDoList = deletedNotes;
    },
    doneNote: (state, action) => {
      //TODO неправильно
      const checkedNote = state.toDoList.map((toDo) => {
        if (toDo.id === action.payload) {
          return (toDo.checked = !toDo.checked);
        }
        return toDo;
      });
      state.toDoList = checkedNote;
    },
  },
});

export const { addToDo, onDeleted, doneNote } = toDoSlice.actions;

export default toDoSlice.reducer;
