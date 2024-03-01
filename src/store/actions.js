import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPokemonByName = createAsyncThunk(
  "pokemon/fetchByName",
  async (name, { rejectWithValue }) => {
    const response = await axios("https://jsonplaceholder.typicode.com/todos");
    return response.data;
  }
);
