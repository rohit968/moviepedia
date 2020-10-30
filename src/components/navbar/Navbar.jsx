import React, { useState } from "react";
import requests from "../requests";
import "./Navbar.css";

const Navbar = ({ setOption }) => {
  const [active, setActive] = useState(false);

  const toggleClass = (name) => {
    setActive(name);
  };

  return (
    <div className="navbar">
      <h2
        className={active === "nowplaying" ? "navbar__active" : null}
        onClick={() => {
          return setOption(requests.fetchTrending), toggleClass("nowplaying");
        }}
      >
        Now Playing
      </h2>
      <h2
        className={active === "upcoming" ? "navbar__active" : null}
        onClick={() => {
          return setOption(requests.fetchUpcoming), toggleClass("upcoming");
        }}
      >
        Upcoming
      </h2>
      <h2
        className={active === "toprated" ? "navbar__active" : null}
        onClick={() => {
          return setOption(requests.fetchTopRated), toggleClass("toprated");
        }}
      >
        Top Rated
      </h2>
      <h2
        className={active === "popular" ? "navbar__active" : null}
        onClick={() => {
          return setOption(requests.fetchPopular), toggleClass("popular");
        }}
      >
        Popular
      </h2>
    </div>
  );
};

export default Navbar;
