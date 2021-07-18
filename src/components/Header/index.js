import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <h1>Pokedex</h1>

      <Link to="/">Home</Link>
    </div>
  );
}
