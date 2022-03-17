import axios from "axios";
import React, { useEffect, useMemo, useRef, useState, useCallback } from "react";
import { useParams } from "react-router";

import Bio from "./components/Bio";
import BioImage from "./components/BioImage";
import Spinner from "../../components/Spinner";
import Header from "../../components/Header";
import { fetchBio } from "../../redux/actions/superhero";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

export default function Biography() {
  const { id } = useParams();
  const [bio, setBio] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  const [bioImage, setBioImage] = useState();
  const [bioWork, setBioWork] = useState();
  const [bioConnections, setBioConnections] = useState();
  const [bioPowerStats, setBioPowerStats] = useState();
  const disptach = useDispatch();


  useEffect(() => {
    id && disptach(fetchBio(id))
  }, [id]);

  const biography = useMemo(() => ({ 
    bio, 
    bioWork,
    connections: bioConnections,
    powerStats: bioPowerStats 
  }), [
    bioWork, 
    bio,
    bioConnections,
    bioPowerStats
  ]);

  return(
    <div>
      <Header />
      <div className="px-4 py-3 mt-10">
        {isLoading && <Spinner />}
        {!isLoading && !error && (
          <>
            <BioImage image={bioImage?.url} alt={bio["full-name"]} />
            <Bio {...biography} />
          </>
        )}
      </div>
    </div>
  );
}