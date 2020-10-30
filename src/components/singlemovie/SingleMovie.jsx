import React, { useEffect, useState } from "react";
import axios from "../axios";
import API_KEY from "../api";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import "./SingleMovie.css";

const SingleMovie = () => {
  const [singleMovie, setSingleMovie] = useState({});

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

  // const year = (singleMovie?.first_air_date || singleMovie?.release_date).split(
  //   "-"
  // )[0];

  const rating = singleMovie.vote_average;

  return (
    <div
      className="singlemovie"
      //   background:
      //     /* top, transparent black, faked with gradient */
      //     linear-gradient(
      //       rgba(0, 0, 0, 0.7),
      //       rgba(0, 0, 0, 0.7)
      //     ),
      //     /* bottom, image */
      //     url(http://fc02.deviantart.net/fs71/i/2011/274/6/f/ocean__sky__stars__and_you_by_muddymelly-d4bg1ub.png);
      // }
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
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default SingleMovie;
