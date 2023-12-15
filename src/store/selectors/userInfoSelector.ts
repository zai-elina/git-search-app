import { RootState } from "../store";

export const selectUserInfo = (state: RootState) => state.userInfo.selectedUser;

export const selectUserRepos = (state: RootState) =>
  state.userInfo.selectedUserRepos;
