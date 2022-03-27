import React, { useEffect, useContext, useRef, useCallback } from "react";
import { useParams } from "react-router";
import Bio from "./components/Bio";
import BioImage from "./components/BioImage";
import Spinner from "../../components/Spinner";
import Header from "../../components/Header";
import SuperheroContext from "../../context/superhero";

export default function Biography() {
  const { id } = useParams();
  const {fetchSuperheroBio, biography, isFetching, bioPhoto, error} = useContext(SuperheroContext);


  const fetchBioRef = useRef(); 

  const fetchBio = useCallback(async () => {
    await fetchSuperheroBio(id);
  }, [id]);

  fetchBioRef.current = fetchBio;

  useEffect(() => {
    id && fetchBioRef.current()?.catch(null);
  }, [id]);

  console.log(biography);

  return(
    <div>
      <Header />
      <div className="px-4 py-3 mt-10">
        {isFetching && <Spinner />}
        {!isFetching && !error && biography?.bio &&(
          <>
            <BioImage image={bioPhoto?.url} alt={biography?.bio["full-name"]} />
            <Bio {...biography} />
          </>
        )}
      </div>
    </div>
  );
}