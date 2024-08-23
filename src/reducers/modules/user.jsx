import { createSlice } from "@reduxjs/toolkit";
import { USER_DETAILS } from "../../constants";

const userString = localStorage.getItem(USER_DETAILS) || "";
var userObj;
if (userString !== "undefined") {
  userObj = userString ? JSON.parse(userString) : null;
}

const initialState = {
  auth: userObj ? true : false,
  id: userObj ? userObj.moderatorId : "",
  firstName: userObj ? userObj.firstName : "",
  lastName: userObj ? userObj.lastName : "",
  email: userObj ? userObj.email : "",
  username: userObj ? userObj.username : "",
  role: userObj ? userObj.role : "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loggingRequest: (state, action) => {
      state.auth = true;
      state.id = action.payload.moderatorId;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.email = action.payload.email;
      state.username = action.payload.username;
      state.role = action.payload.role;
    },

    logOutRequest: (state) => {
      state.auth = false;
      state.id = "";
      state.firstName = "";
      state.lastName = "";
      state.email = "";
      state.username = "";
      state.role = "";
    },
  },
});

export const { loggingRequest, logOutRequest } = userSlice.actions;

export default userSlice.reducer;
