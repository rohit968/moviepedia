import React, { useState } from "react";
import requests from "../requests";
import Banner from "../banner/Banner";
import Navbar from "../navbar/Navbar";
import Results from "../results/Results";
import "./Home.css";

const Home = () => {
  const [option, setOption] = useState(requests.fetchNowPlaying);

  return (
    <div className="home">
      <Banner />
      <Navbar setOption={setOption} />
      <Results option={option} />
    </div>
  );
};

export default Home;
