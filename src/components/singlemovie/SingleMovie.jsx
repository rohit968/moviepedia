import React, { useEffect, useState } from "react";
import axios from "../axios";
import API_KEY from "../api";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import "./SingleMovie.css";

const SingleMovie = () => {
  const [singleMovie, setSingleMovie] = useState({});
  const [data, setData] = useState({
    year: null,
    genres: null,
  });

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

  const title =
    singleMovie?.title || singleMovie?.name || singleMovie?.original_name;

  const overview = singleMovie.overview;

  // const genres = singleMovie.genres;
  // console.log(genres);

  // genres.map((genre) => {
  //   console.log(genre.name);
  // });

  useEffect(() => {
    if (
      (singleMovie?.first_air_date || singleMovie?.release_date) &&
      singleMovie.genres
    ) {
      const year = (
        singleMovie?.first_air_date || singleMovie?.release_date
      ).split("-")[0];
      const genres = singleMovie.genres;
      setData({ year, genres });
    }
  }, [singleMovie]);

  // const year = (singleMovie?.first_air_date || singleMovie?.release_date).split(
  //   "-"
  // )[0];

  const rating = singleMovie.vote_average;

  return (
    <div
      className="singlemovie"
      style={{
        backgroundSize: "cover",
        backgroundImage: `linear-gradient(
          rgba(0, 0, 0, 0.7), 
          rgba(0, 0, 0, 0.7)
        ),url(${image})`,
        backgroundPosition: "cover cover",
      }}
    >
      <div className="singlemovie__container">
        <div className="singlemovie__movieDetails">
          <h1>{title}</h1>
          <p>{overview}</p>
          {data.genres.map((genre) => {
            return <p>{genre}</p>;
          })}
        </div>
        <div className="bottom"></div>
        <div className="genres"></div>
      </div>
    </div>
  );
};

export default SingleMovie;
