import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPokemonByName = createAsyncThunk(
  "pokemon/fetchByName",
  async (name, { rejectWithValue }) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos`);
    const data = await response.json();
    if (response.status < 200 || response.status >= 300) {
      return rejectWithValue(data);
    }
    return data;
  }
);
