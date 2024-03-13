import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

/* export const fetchTodo = createAsyncThunk(
  "toDoList/fetchTodo", //TODO было "pokemon/fetchByName"
  async (name, { rejectWithValue }) => {
    const response = await axios("https://jsonplaceholder.typicode.com/todos");
    return response.data;
  }
); */

export const fetchComment = createAsyncThunk(
  "toDoList/fetchTodo",
  async (name, { rejectWithValue }) => {
    const response = await axios(
      "https://jsonplaceholder.typicode.com/comments"
    );
    return response.data;
  }
);
