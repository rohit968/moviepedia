import React, { useEffect, useState } from "react";
import "./Results.css";
import axios from "../axios";
import FlipMove from "react-flip-move";

import Moviecard from "../moviecard/Moviecard";

const Results = ({ option }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      const request = await axios.get(option);
      setMovies(request.data.results);
      return request;
    }
    fetchMovies();
  }, [option]);

  console.log(movies);

  return (
    <div className="results">
      <FlipMove>
        {movies.map((movie) => {
          return <Moviecard key={movie.id} movie={movie} />;
        })}
      </FlipMove>
    </div>
  );
};

export default Results;
