import { createSlice } from "@reduxjs/toolkit";

//? xử lý loading
export const globalLoadingSlice = createSlice({
  name: "GlobalLoading",
  initialState: {
    globalLoading: false,
  },
  reducers: {
    setGlobalLoading: (state, action) => {
      state.globalLoading = action.payload;
    },
  },
});

export const { setGlobalLoading } = globalLoadingSlice.actions;
export const getGlobalLoading = (state) => state.globalLoading.globalLoading

export default globalLoadingSlice.reducer;
