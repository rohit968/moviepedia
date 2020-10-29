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
      <h2 onClick={() => setOption(requests.fetchTrending)}>Now Playing</h2>
      <h2 onClick={() => setOption(requests.fetchUpcoming)}>Upcoming</h2>
      <h2 onClick={() => setOption(requests.fetchTopRated)}>Top Rated</h2>
      <h2 onClick={() => setOption(requests.fetchPopular)}>Popular</h2>
    </div>
  );
};

export default Navbar;
