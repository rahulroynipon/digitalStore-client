import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { categoryServices } from "./categoryServices";

export const fetchCategories = createAsyncThunk(
  "category/get",
  async (_, thunkAPI) => {
    try {
      return await categoryServices.getCategory();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  categories: [],
  isLoading: false,
};

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.categories = action.payload?.data;
        state.isLoading = false;
      });
  },
});

export default categorySlice.reducer;
