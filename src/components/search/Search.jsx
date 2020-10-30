import React, { useEffect, useState } from "react";
import axios from "../axios";
import API_KEY from "../api";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import Moviecard from "../moviecard/Moviecard";
import FlipMove from "react-flip-move";
import "./Search.css";

const Search = ({ input }) => {
  const [searchMovies, setSearchMovies] = useState([]);

  const loc = queryString.parse(useLocation().search).q;

  console.log(loc);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${input}&page=1&include_adult=false`
      );
      setSearchMovies(request.data.results);
    }
    fetchData();
  }, [input]);

  useEffect(() => {
    if (loc && !searchMovies.length) {
      async function fetchData() {
        const request = await axios.get(
          `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${loc}&page=1&include_adult=false`
        );
        setSearchMovies(request.data.results);
      }
      fetchData();
    }
  }, [loc, searchMovies]);

  return (
    <div className="search">
      <h1>Showing Results for : {loc}</h1>
      <FlipMove>
        {searchMovies.map((movie) => {
          return <Moviecard key={movie.id} movie={movie} />;
        })}
      </FlipMove>
    </div>
  );
};

export default Search;
