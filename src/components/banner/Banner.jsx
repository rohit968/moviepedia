import axios from "../axios";
import React, { useEffect, useState } from "react";
import requests from "../requests";
import "./Banner.css";

const Banner = () => {
  const [trendingMovies, setTrendingMovies] = useState({});
  const [genres, setGenres] = useState({});

  const image_url = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    async function fetchMovies() {
      const request = await axios.get(requests.fetchTrending);
      setTrendingMovies(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
    }
    fetchMovies();
  }, []);

  useEffect(() => {
    async function fetchGenre() {
      const request = await axios.get(requests.fetchGenres);
      setGenres(request.data.genres);
    }
    fetchGenre();
  }, []);

  const ids = trendingMovies.genre_ids;
  console.log(ids);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  const image = `${image_url}${trendingMovies.backdrop_path}`
    ? `${image_url}${trendingMovies.backdrop_path}`
    : `${image_url}${trendingMovies.poster_path}`;

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${image})`,
        backgroundPosition: "cover cover",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {trendingMovies?.title ||
            trendingMovies?.name ||
            trendingMovies?.original_name}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <div className="banner__description">
          {truncate(trendingMovies?.overview, 150)}
        </div>
      </div>
      <div className="banner--fadeButtom"></div>
    </header>
  );
};

export default Banner;
