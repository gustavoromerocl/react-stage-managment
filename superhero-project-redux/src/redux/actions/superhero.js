import { createAction } from "@reduxjs/toolkit";

//Se asigna la url base creada en el archivo api con axios create para las llamadas a la api
import apiCall from "../api";

export const startFetchingSuperheroes = createAction("START_FETCHING_SUPERHEROES");
export const errorFetchingSuperheroes = createAction("ERROR_FETCHING_SUPERHEROES");
export const successFetchingSuperheroes = createAction("SUCCESS_FETCHING_SUPERHEORES");

export const fetchSuperheroes =  (text) => async (dispatch) => {
  try
  {
    dispatch(startFetchingSuperheroes());
    const { data } = await apiCall.get(`/search/${text}`);
    /* console.log(data); */
    dispatch(successFetchingSuperheroes({ data: data?.results }));
  }
  catch (error)
  {
    dispatch(errorFetchingSuperheroes({ error }));
  }
} 
