import React, { useState } from "react";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./components/search/Search";
import SingleMovie from "./components/singlemovie/SingleMovie";
import Footer from "./components/footer/Footer";

function App() {
  const [input, setInput] = useState("");

  return (
    <div className="App">
      <Router>
        <Header setInput={setInput} />

        <Switch>
          <Route path="/details">
            <SingleMovie />
          </Route>
          <Route path="/:q">
            <Search input={input} />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
