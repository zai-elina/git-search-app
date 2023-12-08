import { createSlice } from "@reduxjs/toolkit";
import { User } from "../../type";

interface IUserListInitial {
  searchInput: string;
  sorting: string;
  order: "asc" | "desc" | null;
  userList: User[];
  userListLength: number;
  pageNumber: number;
  isLoadingUserList: boolean;
}

const initialState: IUserListInitial = {
  searchInput: "",
  sorting: "",
  order: null,
  userList: [],
  userListLength: 0,
  pageNumber: 1,
  isLoadingUserList: false,
};

export const userListSlice = createSlice({
  name: "userListSlice",
  initialState,
  reducers: {
    changeIsLoadingUserList: (state, action) => {
      state.isLoadingUserList = !state.isLoadingUserList;
    },
    changeUserList: (state, action: { payload: User[] }) => {
      state.userList = action.payload;
    },
    changeUserListLength: (state, action: { payload: number }) => {
      state.userListLength = action.payload;
    },
  },
});

export const { changeIsLoadingUserList, changeUserList, changeUserListLength } =
  userListSlice.actions;

export default userListSlice.reducer;
