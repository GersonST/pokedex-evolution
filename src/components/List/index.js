import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const List = () => {
  const [pokemonArray, setPokemonArray] = useState([]);

  useEffect(() => {
    const getListPokemons = async () => {
      await axios
        .get("https://pokeapi.co/api/v2/pokemon/", {
          params: {
            limit: 151,
          },
        })
        .then((response) => {
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
        {pokemonArray.map(({ name }, index) => {
          return (
            <Link to={`${name}`} key={name + index}>
              <li key={name}>
                {name} {index + 1}
              </li>
              <img
                src={
                  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/` +
                  `${index + 1}` +
                  `.png`
                }
                alt={name}
                key={index}
              />
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default List;
