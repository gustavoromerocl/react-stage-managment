import { useEffect} from "react";
import { useParams } from "react-router-dom";
import shallow from "zustand/shallow";

import ErrorComponent from "./components/ErrorComponent";
import ResultsList from "./components/ResultsList";
import NoResults from "./components/NoResults";
import Header from "../../components/Header";
import Spinner from "../../components/Spinner";
import useSuperHeroStore from '../../zustand/superhero-store';
import useLoginStore from '../../zustand/login-store';


export default function Results() {
  const { searchText } = useParams();
  const { } = useLoginStore(state => state);

  const { 
    fetchSuperHeroes,
    superheroes,
    isFetchingSuperHeroes,
    fetchSuperheroesError,
  } = useSuperHeroStore((state) => ({
    fetchSuperHeroes: state.fetchSuperHeroes,
    superheroes: state.superheroes,
    isFetchingSuperHeroes: state.isFetchingSuperHeroes,
    fetchSuperheroesError: state.fetchSuperheroesError
  }), shallow);

  useEffect(() => {
    fetchSuperHeroes(searchText);
  }, []);

  return (
    <div>
      <Header />
      <div className="px-3 pb-2 mt-12">
        <h2 className="text-xl font-bold">Resultados para: {searchText}</h2>
        {isFetchingSuperHeroes && <Spinner />}
        <ErrorComponent error={fetchSuperheroesError} />
        <ResultsList data={superheroes} />
        {!isFetchingSuperHeroes && !superheroes?.length && <NoResults />}
      </div>
    </div>
  );
}