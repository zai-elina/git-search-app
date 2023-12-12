import { createSlice } from "@reduxjs/toolkit";
import { IUserInfo } from "../../type";

interface IUserListInitial {
  selectedUser: IUserInfo;
}

const initialState: IUserListInitial = {
  selectedUser: {} as IUserInfo,
};

export const userInfoSlice = createSlice({
  name: "userListSlice",
  initialState,
  reducers: {
    changeSelectedUser: (state, action: { payload: IUserInfo }) => {
      state.selectedUser = action.payload;
    },
  },
});

export const { changeSelectedUser } = userInfoSlice.actions;

export default userInfoSlice.reducer;
