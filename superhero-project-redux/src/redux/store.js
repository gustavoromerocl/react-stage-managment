import { configureStore } from '@reduxjs/toolkit';

import loginReducer from './reducers/login';
import superheroReducer from './reducers/superhero';

export const store = configureStore({
  reducer: {
    loginReducer,
    superheroReducer
  },
})