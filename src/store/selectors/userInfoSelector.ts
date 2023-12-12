import { RootState } from "../store";

export const selectUserInfo = (state: RootState) => state.userInfo.selectedUser;

