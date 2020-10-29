import React, { useEffect, useState } from "react";
import axios from "../axios";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import "./SingleMovie.css";

const SingleMovie = () => {
  const [singleMovie, setSingleMovie] = useState({});
  const API_KEY = "eb8ba0a881d77dfb687cbaf46459ee4e";

  const loc = queryString.parse(useLocation().search).d;

  const image_url = "https://image.tmdb.org/t/p/original";
  const image = `${image_url}${
    singleMovie.backdrop_path || singleMovie.poster_path
  }`;

  useEffect(() => {
    async function fetchMovie() {
      const request = await axios.get(
        `https://api.themoviedb.org/3/movie/${loc}?api_key=${API_KEY}&language=en-US`
      );
      setSingleMovie(request.data);
    }
    fetchMovie();
  }, [loc]);

  console.log(singleMovie);

  return (
    <div className="singlemovie">
      <div
        className="singlemovie__container"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url(${image})`,
          backgroundPosition: "cover cover",
          height: 1024,
        }}
      >
        <div className="m" style={{ height: 1024 }}></div>
        <h1>Hello</h1>
      </div>
    </div>
  );
};

export default SingleMovie;
