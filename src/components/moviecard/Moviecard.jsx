import React, { forwardRef } from "react";
import "./Moviecard.css";
import StarIcon from "@material-ui/icons/Star";
import { useHistory } from "react-router-dom";

const Moviecard = forwardRef(({ movie }, ref) => {
  const history = useHistory();
  const image_url = "https://image.tmdb.org/t/p/original";

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  const image = `${image_url}${movie.backdrop_path || movie.poster_path}`;

  const title = movie?.title || movie?.name || movie?.original_name;

  const year = (movie["first_air_date"] || movie["release_date"]).split("-")[0];
  const rating = movie.vote_average;

  const clickHandler = (event) => {
    event.preventDefault();
    history.push(`/details?d=${movie.id}`);
  };

  return (
    <div ref={ref} className="moviecard">
      <div className="moviecard__container" onClick={clickHandler}>
        <img src={image} alt={title} />
        <div className="moviecard__contents">
          <div className="moviecard__contentsTitle">
            <h2>{truncate(title, 25)}</h2>
            <p>{year}</p>
          </div>
          <p className="moviecard__contentsRating">
            <StarIcon />
            {rating}
          </p>
        </div>
      </div>
    </div>
  );
});

export default Moviecard;
