import { createSlice } from "@reduxjs/toolkit";

interface ISearchInitial {
  searchInput: string;
  sorting: string;
  order: "asc" | "desc" | null;
  pageNumber: number;
}

const initialState: ISearchInitial = {
  searchInput: "",
  sorting: "",
  order: null,
  pageNumber: 1,
};

export const searchParamsSlice = createSlice({
  name: "searchParamsSlice",
  initialState,
  reducers: {
    changeSearchInput: (state, action: { payload: string }) => {
      state.searchInput = action.payload;
    },
  },
});

export const { changeSearchInput } = searchParamsSlice.actions;

export default searchParamsSlice.reducer;
