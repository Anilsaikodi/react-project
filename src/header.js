import React from "react";
import GithubLogo from "./img/logo.png";

import "../src/sass/style.css";

const Header = () => {
  return (
    <>
      <div>
      
        <a
          className="github-icon"
          href=""
          target="_blank"
          rel="noreferrer"
        >
          
          <img
            className="logo-icon"
            style={{
              position: "absolute",
              left: "50px",
              top: "5px",
              height: "5rem",
              width: "5rem",
              
              cursor: "pointer",
            }}
            src={GithubLogo}
            alt="github-icon"
            
          />
          
        </a>
        <strong>
          <h2
            className="heading-name"
            style={{
              background: "none",
              // borderRadius: "1rem",
              marginBottom: 50,
              color: "#333",
              textAlign: "center",
              // fontWeight: "bold", //No need of bold because headings are itself bold
              fontFamily: "Scheherazade New",
              textShadow: "2px 2px 3px #b0b0b0",
            }}
          >
            A Book Library for all Book Lovers
          </h2>
        </strong>
      </div>
    </>
  );
};

export default Header;
