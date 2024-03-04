import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getRandomInt } from "../shared/utils";
import getListFromStorage from "../shared/helpers/getListFromStorage";
import addLocalStorage from "../shared/helpers/addLocalStorage";
import setListToStorage from "../shared/helpers/setListToStorage";
import { fetchPokemonByName } from "./actions";

interface toDoList {
  id: number;
  title: string;
  completed: boolean;
}

const getListFromLS = getListFromStorage();

export type TodosState = {
  currentTodos: toDoList[];
  initialTodos: toDoList[];
  modalShow: boolean;
  todo: [];
}; //TODO можно вынести в интерфейс

const initialState: TodosState = {
  currentTodos: getListFromLS,
  initialTodos: getListFromLS,
  modalShow: false,
  todo: [],
};

export const toDoSlice = createSlice({
  name: "toDoList",
  initialState,
  reducers: {
    onModalShow(state, action) {
      state.modalShow = !state.modalShow;
    },
    addToDo(state, action: PayloadAction<string>) {
      const newId = getRandomInt();
      const title = action.payload;
      state.currentTodos.push({
        id: newId,
        title,
        completed: false,
      });
      state.initialTodos.push({
        id: newId,
        title,
        completed: false,
      });
      addLocalStorage(title, newId);
    },
    deletedToDo(state, action: PayloadAction<{ id: number }>) {
      const { id } = action.payload;
      const deletedNotes = state.currentTodos.filter((toDo) => toDo.id !== id);
      state.currentTodos = deletedNotes;
      state.initialTodos = deletedNotes;
      setListToStorage(deletedNotes);
    },
    completedToDo(state, action: PayloadAction<{ id: number }>) {
      const checkedNote = state.currentTodos.map((toDo) => {
        const { id } = action.payload;
        if (toDo.id === id) {
          toDo.completed = !toDo.completed;
        }
        return toDo;
      });
      state.currentTodos = checkedNote;
      state.initialTodos = checkedNote;
      setListToStorage(checkedNote);
    },
    changeTextToDo(
      state,
      action: PayloadAction<{ id: number; title: string }>
    ) {
      const { id, title } = action.payload;
      const arr = state.currentTodos.map((toDo) => {
        if (toDo.id === id) {
          toDo.title = title;
        }
        return toDo;
      });
      state.currentTodos = arr;
      state.initialTodos = arr;
      setListToStorage(arr);
    },
    setToDoCurrent(state, action: PayloadAction<toDoList[]>) {
      state.currentTodos = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPokemonByName.pending, (state, action) => {
      // state.statusByName[action.meta.arg] = "pending";    кидает загрузку
    });
    builder.addCase(fetchPokemonByName.fulfilled, (state, action) => {
      // state.statusByName[action.meta.arg] = "fulfilled";
      state.todo = action.payload;
    });
    builder.addCase(fetchPokemonByName.rejected, (state, action) => {
      // state.statusByName[action.meta.arg] = "rejected";     на случай ошибки
    });
  },
});

export const {
  onModalShow,
  addToDo,
  deletedToDo,
  completedToDo,
  changeTextToDo,
  setToDoCurrent,
} = toDoSlice.actions;

// Other code such as selectors can use the imported `RootState` type
/* export const selectCount = (state) => {
  return state.todo.currentTodos.values, state.todo.initialTodos.values;
}; */

export default toDoSlice.reducer;
