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
      {pokemon && (
        <div className="view-container">
          <h1>{pokemon.name}</h1>
          <h2>Nº {pokemon.id}</h2>
          <img
            src={
              `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/` +
              pokemon.id +
              `.png`
            }
            alt=""
          />
          {pokemon.types.map((poketype) => {
            return <p key={poketype.type.name}>{poketype.type.name}</p>;
          })}

          {pokemon.stats.map((pokestats) => {
            return (
              <p key={pokestats.stat.name}>
                {pokestats.stat.name}: {pokestats.base_stat}
              </p>
            );
          })}

          <p>{pokemon.height / 10}m</p>
          <p>{pokemon.weight / 10}kg</p>

          {pokemon.abilities.map((pokeabilities) => {
            return (
              <p key={pokeabilities.ability.name}>
                {pokeabilities.ability.name}
              </p>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ViewPokemon;
