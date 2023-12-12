import { RootState } from "../store";

export const selectUserList = (state: RootState) => state.userList.userList;

export const selectUserListLength = (state: RootState) =>
  state.userList.userListLength;
