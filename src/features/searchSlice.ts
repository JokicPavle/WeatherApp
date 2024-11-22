import { createSlice } from "@reduxjs/toolkit";

interface SearchState {
  value: string;
}

const initialState: SearchState = {
  value: "",
};

const SearchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    search(state, action) {
      state.value = action.payload;
    },
  },
});

export const { search } = SearchSlice.actions;
export default SearchSlice.reducer;
