import axios from "axios";
import { useCallback, useState } from "react";
import SuperheroContext from ".";

export default function SuperheroProvider({children}){
  const [isSearching, setIsSearching] = useState();
  const [results, setResults] = useState([]);
  const [error, setError] = useState();
  const [biography, setBiography] = useState();
  const [isFetching, setIsFetching] = useState(false);
  const [bioPhoto, setBioPhoto] = useState();
  
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

  const fetchSuperheroBio = useCallback(async (id) => {
    try{
      setError();
      setBioPhoto();
      setBiography({});
      setIsFetching(true);

      const bio = await axios.get(`https://superheroapi.com/api.php/10223232565340348/${id}/biography`);
      const bioPhoto = await axios.get(`https://superheroapi.com/api.php/10223232565340348/${id}/image`);
      const bioWork = await axios.get(`https://superheroapi.com/api.php/10223232565340348/${id}/work`);
      const connections = await axios.get(`https://superheroapi.com/api.php/10223232565340348/${id}/connections`);

      setBioPhoto(bioPhoto?.data);
      setBiography({ bio: bio.data, bioWork: bioWork.data, connections: connections.data });
    }
    catch (error){
      setError("Algo ha ocurrido");
      setBiography({});
      setBioPhoto();
    } finally {
      setIsFetching(false);
    }
  },[setBiography, setBioPhoto, setIsFetching] )
  return(
    <SuperheroContext.Provider value={{
      searchSuperhero,
      fetchSuperheroBio,
      results,
      error,
      isSearching,
      biography,
      isFetching,
      bioPhoto,
    }}>
      { children }
    </SuperheroContext.Provider>
  )
}