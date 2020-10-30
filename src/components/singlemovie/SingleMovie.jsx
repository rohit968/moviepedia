import React, { useEffect, useState } from "react";
import axios from "../axios";
import API_KEY from "../api";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import "./SingleMovie.css";
import { Button } from "@material-ui/core";

const SingleMovie = () => {
  const [singleMovie, setSingleMovie] = useState({});
  const [data, setData] = useState({
    year: null,
    genres: [],
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

  const rating = singleMovie.vote_average;

  const title =
    singleMovie?.title || singleMovie?.name || singleMovie?.original_name;

  const overview = singleMovie.overview;

  const IMDB_link = `https://www.imdb.com/title/${singleMovie.imdb_id}/?ref_=nv_sr_srsg_0`;

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
          <div>
            <p>{overview}</p>
            <div className="bottom"></div>
          </div>
        </div>
        <div className="singlemovie__genres">
          {data.genres.map((genre) => {
            return (
              <p style={{ marginLeft: "10px" }} key={genre.id}>
                {genre.name}
              </p>
            );
          })}
        </div>
        <a href={IMDB_link} target="_blank" rel="noopener noreferrer">
          <Button
            variant="contained"
            color="secondary"
            className="singlemovie__buttonIMDB"
          >
            Show IMDB
          </Button>
        </a>
        <div className="rating">
          <h4>Rating</h4>
          <p>{rating} / 10</p>
        </div>
      </div>
    </div>
  );
};

export default SingleMovie;
