import axios from "axios";
import React, { useEffect, useMemo, useRef, useState, useCallback } from "react";
import { useParams } from "react-router";

import Bio from "./components/Bio";
import BioImage from "./components/BioImage";
import Spinner from "../../components/Spinner";
import Header from "../../components/Header";
import { fetchBio } from "../../redux/actions/superhero";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { biographySel } from "../../redux/selectors";

export default function Biography() {
  const { id } = useParams();
  const disptach = useDispatch();
  const biography = useSelector(biographySel)

  console.log(biography);
  useEffect(() => {
    id && disptach(fetchBio(id))
  }, [id]);


  return(
    <div>
{/*       <Header />
      <div className="px-4 py-3 mt-10">
        {isLoading && <Spinner />}
        {!isLoading && !error && (
          <>
            <BioImage image={bioImage?.url} alt={bio["full-name"]} />
            <Bio {...biography} />
          </>
        )}
      </div> */}
    </div>
  );
}