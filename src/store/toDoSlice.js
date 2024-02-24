import { createSlice } from "@reduxjs/toolkit";
import getListFromStorage from "../shared/helpers/getListFromStorage";
import { getRandomInt } from "../shared/utils";
import addLocalStorage from "../shared/helpers/addLocalStorage";
import setListToStorage from "../shared/helpers/setListToStorage";

const getListFromLS = getListFromStorage();
const initialState = {
  toDoListCurrent: getListFromLS,
  toDoListInitial: getListFromLS,
};

export const toDoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addToDo: (state, action) => {
      const newId = getRandomInt();
      state.toDoListCurrent.push({
        id: newId,
        value: action.payload,
        checked: false,
      });
      state.toDoListInitial.push({
        id: newId,
        value: action.payload,
        checked: false,
      });
      addLocalStorage(action.payload, newId);
    },
    onDeleted: (state, action) => {
      const deletedNotes = state.toDoListCurrent.filter(
        (i) => i.id !== Number(action.payload)
      );
      state.toDoListCurrent = deletedNotes;
      state.toDoListInitial = deletedNotes;
      setListToStorage(deletedNotes);
    },
    doneNote: (state, action) => {
      const checkedNote = state.toDoListCurrent.map((toDo) => {
        if (toDo.id === action.payload) {
          toDo.checked = !toDo.checked;
        }
        return toDo;
      });
      state.toDoListCurrent = checkedNote;
      state.toDoListInitial = checkedNote;
      setListToStorage(checkedNote);
    },
    setToDoCurrent: (state, action) => {
      const arr = action.payload;
      state.toDoListCurrent = arr;
    },
    setToDo: (state, action) => {
      const arr = action.payload;
      state.toDoListCurrent = arr;
      state.toDoListInitial = arr;
      setListToStorage(arr);
    },
    changeTextToDo: (state, action) => {
      const { id, text } = action.payload;
      const arr = state.toDoListInitial.map((toDo) => {
        if (toDo.id === id) {
          toDo.value = text;
        }
        return toDo;
      });
      state.toDoListCurrent = arr;
      state.toDoListInitial = arr;
      setListToStorage(arr);
    },
  },
});

export const {
  addToDo,
  onDeleted,
  doneNote,
  setToDoCurrent,
  setToDo,
  changeTextToDo,
} = toDoSlice.actions;

export default toDoSlice.reducer;
