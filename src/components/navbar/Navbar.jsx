import React, { useState } from "react";
import requests from "../requests";
import "./Navbar.css";

const Navbar = ({ setOption }) => {
  const [active, setActive] = useState(false);

  const toggleClass = () => {
    setActive(!active);
  };

  return (
    <div className="navbar">
      <h2
        className={active ? "navbar_active" : null}
        onClick={() => {
          return setOption(requests.fetchTrending), toggleClass;
        }}
      >
        Now Playing
      </h2>
      <h2
        className={active ? "navbar_active" : null}
        onClick={() => {
          return setOption(requests.fetchUpcoming), toggleClass;
        }}
      >
        Upcoming
      </h2>
      <h2
        className={active ? "navbar_active" : null}
        onClick={() => {
          return setOption(requests.fetchTopRated), toggleClass;
        }}
      >
        Top Rated
      </h2>
      <h2
        className={active ? "navbar_active" : null}
        onClick={() => {
          return setOption(requests.fetchPopular), toggleClass;
        }}
      >
        Popular
      </h2>
    </div>
  );
};

export default Navbar;
