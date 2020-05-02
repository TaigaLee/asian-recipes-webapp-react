import React from "react";
import "../index.css";

export default function Header() {
  const headerStyle = {
    backgroundColor: "#cf383c",
    height: "8em",
    fontFamily: "Chewy",
    marginBottom: "2em",
    paddingLeft: "30px",
    paddingTop: "20px"
  };

  const logoStyle = {
    fontFamily: "Bungee",
    color: "white",
    fontSize: "3.5em"
  };

  const imgStyle = {
    height: "80px",
    verticalAlign: "middle"
  };

  return (
    <nav style={headerStyle}>
      <h1 style={logoStyle}>
        MISO HAPPY{" "}
        <img
          style={imgStyle}
          src="http://icons.iconarchive.com/icons/thehoth/seo/256/seo-panda-icon.png"
        />
      </h1>
    </nav>
  );
}
