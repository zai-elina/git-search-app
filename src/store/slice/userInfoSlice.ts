import { createSlice } from "@reduxjs/toolkit";
import { IRepo, IUserInfo } from "../../type";

interface IUserListInitial {
  selectedUser: IUserInfo;
  selectedUserRepos: IRepo[];
}

const initialState: IUserListInitial = {
  selectedUser: {} as IUserInfo,
  selectedUserRepos: [],
};

export const userInfoSlice = createSlice({
  name: "userListSlice",
  initialState,
  reducers: {
    changeSelectedUser: (state, action: { payload: IUserInfo }) => {
      state.selectedUser = action.payload;
    },
    changeSelectedUserPepos: (state, action: { payload: IRepo[] }) => {
      state.selectedUserRepos = action.payload;
    },
  },
});

export const { changeSelectedUser, changeSelectedUserPepos } =
  userInfoSlice.actions;

export default userInfoSlice.reducer;
