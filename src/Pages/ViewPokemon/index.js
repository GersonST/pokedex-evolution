import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
          <h2># {pokemon.id}</h2>
          <img
            src={pokemon.sprites.other["official-artwork"].front_default}
            alt=""
          />
          {pokemon.types.map((poketype) => {
            return (
              <div>
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/${poketype.type.name}.png`}
                  alt={poketype.type.name}
                  style={{ width: "100px" }}
                />
              </div>
            );
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
