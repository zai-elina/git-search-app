import { createSlice } from "@reduxjs/toolkit";
import { User } from "../../type";

interface IUserListInitial {
  searchInput: string;
  sorting: string;
  order: "asc" | "desc" | null;
  userList: User[];
  pageNumber: number;
}

const initialState: IUserListInitial = {
  searchInput: "",
  sorting: "",
  order: "asc",
  userList: [],
  pageNumber: 1,
};

export const userListSlice = createSlice({
  name: "userListSlice",
  initialState,
  reducers: {},
});

export const {} = userListSlice.actions;

export default userListSlice.reducer;
