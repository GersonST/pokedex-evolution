import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="main-header">
      <Link
        to="/"
        style={{
          textDecoration: "none",
          color: "black",
          fontSize: "30px",
        }}
      >
        Home
      </Link>
      <Link
        to="/pokedex"
        style={{
          textDecoration: "none",
          color: "black",
          fontSize: "30px",
        }}
      >
        Pokedex
      </Link>
      <h1>Pokedex</h1>
    </header>
  );
}
