import { createReducer } from "@reduxjs/toolkit";
import { checkingAuth, completedAuth, errorAuth } from "../actions/login";

const loginReducer = createReducer([], builder => {
  builder.addCase(checkingAuth.toString(), (state, action) => {
    return {
      ...state,
      isCheckingAuth: true
    }
  })
  .addCase(completedAuth.toString(), (state, action) => {
    return {
      ...state,
      isAuth: action.isAuth,
      isCheckingAuth: false
    }
  })
  .addCase(errorAuth.toString(), (state, action) => {
    return {
      ...state,
      isAuth: false, 
      isCheckingAuth: false,
      error: action.error
    }
  })
});

export default loginReducer;