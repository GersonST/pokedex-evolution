import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

export default function Header() {
  return (
    <div className="main-header">
      <Link
        to="/"
        style={{
          textDecoration: "none",
          color: "white",
          fontSize: "30px",
        }}
      >
        Home
      </Link>
      <h1>Pokedex</h1>
    </div>
  );
}
