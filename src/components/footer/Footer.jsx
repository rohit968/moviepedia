import React from "react";
import "./Footer.css";
import FavoriteIcon from "@material-ui/icons/Favorite";

const Footer = () => {
  return (
    <div className="footer">
      <p>
        Made with <FavoriteIcon style={{ color: "red" }} /> by Rohit Tiwari
      </p>
    </div>
  );
};

export default Footer;
