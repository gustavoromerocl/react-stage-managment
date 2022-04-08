import create from 'zustand';
import apiCall from './api';
import { devtools } from 'zustand/middleware';

const superheroStore = create( devtools ((set) => ({
  isFetchingSuperHeroes: false,
  fetchSuperheroesError: undefined,
  superheroes: [],
  fetchSuperHeroes: async (searchText) => {
    try {
      set({ fetchSuperheroesError: undefined, superheroes: [], isFetchingSuperHeroes: true});

      const { data } = await apiCall.get(`/search/${searchText}`);

      set({ superheroes: data?.results });
    } catch (error) {
      set({ fetchSuperheroesError: error});
    } finally {
      set({ isFetchingSuperHeroes: false });
    }
  }
})));

export default superheroStore;