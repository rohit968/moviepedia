import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import "./Header.css";
import { Button } from "@material-ui/core";

const Header = ({ setInput }) => {
  const history = useHistory();
  const [searchInput, setSearchInput] = useState("");

  const clickHandler = (e) => {
    setInput(searchInput);
    history.push(`/search?q=${searchInput}`);
    setSearchInput("");
  };

  return (
    <div className="header">
      <div className="header__listItems">
        <Link to="/" className="header__listItem">
          MOVIE<span>PEDIA</span>
        </Link>
      </div>
      <div className="header__searchBar">
        <input type="text" onChange={(e) => setSearchInput(e.target.value)} />
        <SearchIcon
          className="header__searchBarIcon"
          disabled={!searchInput}
          type="submit"
          onClick={clickHandler}
        />
      </div>
      <div className="header__signup">
        <Button variant="contained" color="primary" className="header__button">
          SignUp
        </Button>
      </div>
    </div>
  );
};

export default Header;
