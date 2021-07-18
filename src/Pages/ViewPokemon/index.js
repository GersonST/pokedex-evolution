import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./styles.scss";

const ViewPokemon = () => {
  const [pokemon, setPokemon] = useState(null);
  const { name } = useParams();

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((r) => r.json())
      .then((resultPokemon) => {
        setPokemon(resultPokemon);
      });
  }, [name]);

  if (!pokemon) {
    return null;
  }

  return (
    <div className="PokemonView">
      <h1>{pokemon.name}</h1>
      <img
        src={
          `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/` +
          pokemon.id +
          `.png`
        }
        alt={pokemon.name}
      />
      Abilities
      <ul className="PokemonView__abilities">
        {pokemon.abilities.map((item) => (
          <li>{item.ability.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ViewPokemon;
