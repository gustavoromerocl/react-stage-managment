import { createAction } from "@reduxjs/toolkit";

export const checkingAuth = createAction("CHECKING_AUTH");
export const completedAuth = createAction("COMPLETED_AUTH");
export const errorAuth = createAction("ERROR_AUTH");

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