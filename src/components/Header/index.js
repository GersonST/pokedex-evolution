import React from "react";
import Logo from "../../assets/images/logo.png";
import { HeaderPokemon, HeaderLinks, HeaderA } from "./styles";

export default function Header() {
  return (
    <HeaderPokemon>
      <HeaderLinks to="/">
        <img src={Logo} alt="logo pokemon" />
      </HeaderLinks>
      <HeaderLinks to="/">Home</HeaderLinks>
      <HeaderLinks to="/pokedex">Pokedex</HeaderLinks>
      <HeaderA
        href="https://github.com/GersonST/pokedex-evolution"
        target="_blank"
      >
        Documentation
      </HeaderA>
    </HeaderPokemon>
  );
}
