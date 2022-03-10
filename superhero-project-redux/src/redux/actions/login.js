import { createAction } from "@reduxjs/toolkit";

export const checkingAuth = createAction("CHECKING_AUTH");
export const completedAuth = createAction("COMPLETED_AUTH");
export const errorAuth = createAction("ERROR_AUTH");

export const sendingAuthForm = createAction("SENDING_AUTH_FORM");
export const completedAuthForm = createAction("COMPLETED_AUTH_FORM");
export const errorSendAuthForm = createAction("ERROR_SEND_AUTH_FORM");

export const checkIfUserIsAuth = () => (disptach) => {
  try {
    disptach(checkingAuth());
    const isAuth = localStorage.getItem("@superhero-isAuth")?.length > 0;
    disptach(completedAuth({ isAuth }))
  } 
  catch (error) {
    disptach(errorAuth({ error }));
  }
};

export const submitLogin = (name, email) => (dispatch) => {
  try 
  {
    dispatch(sendingAuthForm());
    localStorage.setItem("@superhero-isAuth", "true");
    localStorage.setItem("@superhero-data", JSON.stringify({
      name,
      email
    }));
    dispatch(completedAuthForm());
  } 
  catch (error)
  {
    dispatch(errorSendAuthForm({ error }))
  }
};