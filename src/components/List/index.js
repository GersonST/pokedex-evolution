import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./styles.scss";

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
    <div className="card-container">
      <ul className="list-container">
        {pokemonArray.map(({ name }, index) => {
          return (
            <Link
              to={`${name}`}
              key={name + index}
              style={{ textDecoration: "none" }}
            >
              <div className="card">
                <div className="info-card">
                  <p className="pokemon-id">#{index + 1}</p>
                  <li className="pokemon-list" key={name}>
                    {name}
                  </li>
                </div>
                <div className="image-container">
                  <img
                    src={
                      `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/` +
                      `${index + 1}` +
                      `.png`
                    }
                    alt={name}
                    key={index}
                    className="pokemon-image"
                  />
                </div>
              </div>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default List;
