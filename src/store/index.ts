import { configureStore } from "@reduxjs/toolkit";
import toDoReducer from "./toDoSlice";
import { useDispatch } from "react-redux";

const store = configureStore({ reducer: { todo: toDoReducer } });

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch; // Export a hook that can be reused to resolve types
