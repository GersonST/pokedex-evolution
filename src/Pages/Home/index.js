import React, { useState } from "react";
import axios from "axios";
import List from "../../components/List";

const Home = () => {
  const [namePokemon, setNamePokemon] = useState("");
  const [pokemonData, setPokemonData] = useState("");

  const getPokemon = async (e) => {
    e.preventDefault();
    await axios
      .get(`https://pokeapi.co/api/v2/pokemon/${namePokemon}`)
      .then((response) => {
        console.log(response.data);
        setPokemonData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div>
        <form action="">
          <input
            type="text"
            placeholder="ex: pikachu"
            onChange={(e) => {
              setNamePokemon(e.target.value);
            }}
          />

          <button onClick={getPokemon}>Procurar</button>
        </form>
      </div>
      {pokemonData && (
        <div className="view-container">
          <h1>{pokemonData.name}</h1>
          <h2>Nº {pokemonData.id}</h2>
          <img
            src={
              `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/` +
              pokemonData.id +
              `.png`
            }
            alt=""
          />
          {pokemonData.types.map((poketype) => {
            return <p key={poketype.type.name}>{poketype.type.name}</p>;
          })}

          {pokemonData.stats.map((pokestats) => {
            return (
              <p key={pokestats.stat.name}>
                {pokestats.stat.name}: {pokestats.base_stat}
              </p>
            );
          })}

          <p>{pokemonData.height / 10}m</p>
          <p>{pokemonData.weight / 10}kg</p>

          {pokemonData.abilities.map((pokeabilities) => {
            return (
              <p key={pokeabilities.ability.name}>
                {pokeabilities.ability.name}
              </p>
            );
          })}
        </div>
      )}

      <List />
    </div>
  );
};

export default Home;
