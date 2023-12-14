import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../type";

interface IUserInfoInitial {
  userList: IUser[];
  userListLength: number;
  isLoadingUserList: boolean;
}

const initialState: IUserInfoInitial = {
  userList: [],
  userListLength: 0,
  isLoadingUserList: false,
};

export const userListSlice = createSlice({
  name: "userListSlice",
  initialState,
  reducers: {
    changeUserList: (state, action: { payload: IUser[] }) => {
      state.userList = action.payload;
    },
    changeUserListLength: (state, action: { payload: number }) => {
      state.userListLength = action.payload;
    },
  },
});

export const { changeUserList, changeUserListLength } = userListSlice.actions;

export default userListSlice.reducer;
