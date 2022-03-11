import { createAction } from "@reduxjs/toolkit";

export const startFetchingSuperheroes = createAction("START_FETCHING_SUPERHEROES");
export const errorFetchingSuperheroes = createAction("ERROR_FETCHING_SUPERHEROES");
export const successFetchingSuperheroes = createAction("SUCCESS_FETCHING_SUPERHEORES");

export const fetchSuperheroes = (text) => (dispatch) => {
  try
  {
    dispatch(startFetchingSuperheroes());
    const { data } = await axios.get(`https://superheroapi.com/api.php/10223232565340348/search/${searchText}`);
    dispatch(successFetchingSuperheroes({ data }));
  }
  catch (error)
  {
    dispatch(errorFetchingSuperheroes({ error }));
  }
} 
