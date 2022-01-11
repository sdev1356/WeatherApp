import React from "react";

import HeartIcon from "../img/heart.svg";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="Footer">
      <p>
        Made with &nbsp;
        <img src={HeartIcon} alt="love icon" />
        &nbsp; by &nbsp;
        <a href="https://www.github.com/sdev1356" target="_blank" rel="noreferrer" >Devashish Sharma</a>
      </p>
    </footer>
  );
}

export default Footer;