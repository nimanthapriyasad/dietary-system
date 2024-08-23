import { configureStore } from "@reduxjs/toolkit";
import user from "./modules/user";

export const store = configureStore({
  reducer: {
    user,
  },
});

export default store;
