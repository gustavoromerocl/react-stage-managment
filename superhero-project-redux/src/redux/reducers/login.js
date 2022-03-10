import { createReducer } from "@reduxjs/toolkit";
import { 
  checkingAuth, 
  completedAuth, 
  errorAuth,
  sendingAuthForm,
  completedAuthForm,
  errorSendAuthForm
 } from "../actions/login";

const initialState = {
  isCheckingAuth: false,
  isAuth: false,
  isSendingAuthForm: false,
  isSuccessLogin: false, 
  error: undefined
};

const loginReducer = createReducer(initialState, builder => {
  builder.addCase(checkingAuth.toString(), (state, action) => {
    return {
      ...state,
      isCheckingAuth: true
    }
  })
  .addCase(completedAuth.toString(), (state, action) => {
    return {
      ...state,
      isAuth: action.payload.isAuth,
      isCheckingAuth: false
    }
  })
  .addCase(errorAuth.toString(), (state, action) => {
    return {
      ...state,
      isAuth: false, 
      isCheckingAuth: false,
      error: action.payload.error
    }
  })
  .addCase(sendingAuthForm.toString(), (state, action) => {
    return {
      ...state,
      isSendingAuthForm: true,
      error: undefined
    }
  })
  .addCase(completedAuthForm.toString(), (state, action) => {
    return {
      ...state,
      isSendingAuthForm: false,
      isSuccessLogin: true
    }
  })
  .addCase(errorSendAuthForm.toString(), (state, action) => {
    return {
      ...state,
      isSendingAuthForm: false,
      isSuccessLogin: false,
      error: action.payload.error
    }
  })
});

export default loginReducer;