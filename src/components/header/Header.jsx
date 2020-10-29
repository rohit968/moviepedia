import React from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import "./Header.css";
import { Button } from "@material-ui/core";

const Header = () => {
  return (
    <div className="header">
      <div className="header__listItems">
        <Link to="/" className="header__listItem">
          MOVIE<span>PEDIA</span>
        </Link>
      </div>
      <div className="header__searchBar">
        <input type="text" />
        <SearchIcon />
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
