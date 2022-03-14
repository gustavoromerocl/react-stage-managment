import { createReducer } from "@reduxjs/toolkit";
import {
  startFetchingSuperheroes,
  errorFetchingSuperheroes,
  successFetchingSuperheroes
} from "../actions/superhero";

const initialState = {
  isFetchingSuperheroes: false,
  error: undefined,
  superheroes: [],
}

const superheroReducer = createReducer(initialState, builder => {
  builder.addCase(startFetchingSuperheroes.toString(), (state, action) => {
    return {
      ...state,
      isFetchingSuperheroes: true
    }
  })
  .addCase(successFetchingSuperheroes.toString(), (state, action) => {
    return {
      ...state,
      isFetchingSuperheroes: false,
      superheroes: action.payload.data
    }
  })
  .addCase(errorFetchingSuperheroes.toString(), (state, action) => {
    return {
      ...state,
      isFetchingSuperheroes: false,
      superheroes: [],
      error: action.payload.error
    }
  })
  .addDefaultCase( (state, action) => {
    return state;
  })
});

export default superheroReducer;
