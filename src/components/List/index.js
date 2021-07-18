import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const List = () => {
  const [pokemonArray, setPokemonArray] = useState([]);

  useEffect(() => {
    const getListPokemons = async () => {
      await axios.get("https://pokeapi.co/api/v2/pokemon/").then((response) => {
        console.log(response.data.results);
        setPokemonArray(response.data.results);
      });
    };
    getListPokemons();
  }, []);

  return (
    <div>
      <h1>List</h1>
      <ul>
        {pokemonArray.map(({ name }) => {
          return (
            <Link to={`${name}`}>
              <li key={name}>{name}</li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default List;
