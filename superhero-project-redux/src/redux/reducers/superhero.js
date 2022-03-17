import { createReducer } from "@reduxjs/toolkit";
import {
  startFetchingSuperheroes,
  errorFetchingSuperheroes,
  successFetchingSuperheroes,
  startFetchingBio,
  errorFetchingBio,
  successFetchingBio
} from "../actions/superhero";

const initialState = {
  isFetchingSuperheroes: false,
  isFetchingBio: false,
  superheroes: [],
  bio: {},
  work: {},
  connections: {},
  photo: undefined,
  error: undefined,
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
  .addCase(startFetchingBio.toString(), (state, action) => {
    //Se limpian los selectores para quitar la información de otras busquedas
    return {
      ...state,
      isFetchingBio: true,
      bio: {},
      work: {},
      connections: {},
      photo: undefined,
    }
  })
  .addCase(successFetchingBio.toString(), (state, action) => {
    return {
      ...state,
      isFetchingBio: false,
    }
  })
  .addCase(errorFetchingBio.toString(), (state, action) => {
    return {
      ...state,
      isFetchingBio: false,
      error: action.payload.error
    }
  })
  .addDefaultCase( (state, action) => {
    return state;
  })
});

export default superheroReducer;
