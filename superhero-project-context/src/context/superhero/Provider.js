import axios from "axios";
import { useState } from "react";
import SuperheroContext from ".";

export default function SuperheroProvider({children}){
  const [isSearching, setIsSearching] = useState();
  const [results, setResults] = useState([]);
  const [error, setError] = useState();
  
  const searchSuperhero = async (searchText) => {
    try {
      setIsSearching(true);
      setError();
      setResults([]);

      const { data } = await axios.get(`https://superheroapi.com/api.php/10223232565340348/search/${searchText}`);

      setResults(data?.results);
    } catch (error) {
      setError("Algo ha ocurrido");
    } finally {
      setIsSearching(false);
    }
  }
  return(
    <SuperheroContext.Provider value={{
      searchSuperhero,
      results,
      error,
      isSearching
    }}>
      { children }
    </SuperheroContext.Provider>
  )
}