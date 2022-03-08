import { createReducer } from "@reduxjs/toolkit";
import { checkLogin } from "../actions/login";

const loginReducer = createReducer([], builder => {
  builder.addCase(checkLogin.toString(), (state, action) => {
    console.log(action);
  })
});

export default loginReducer;