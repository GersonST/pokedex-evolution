import React, { useState, useEffect } from "react";
import axios from "axios";
import { useTheme } from "styled-components";

import { Link } from "react-router-dom";

export const CardPokemon = ({ name }) => {
  const { colors } = useTheme();
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`).then((response) => {
      const { id, types, sprites } = response.data;

      let backgroundColor = types[0].type.name;

      setPokemon({
        id,
        backgroundColor: colors.backgroundType[backgroundColor],
        image: sprites.other["official-artwork"].front_default,
        type: types.map((pokemonType) => {
          const typeName = pokemonType.type.name;

          return {
            name: typeName,
            color: colors.type,
          };
        }),
      });
    });
  }, [name, colors]);

  return (
    <Link to={`pokedex/${name}`} color={pokemon.backgroundColor}>
      <div className="pokemon">
        <p>#{pokemon.id}</p>
        <h2>{name}</h2>
        {pokemon.type && (
          <div>
            {pokemon.type.map((pokemonType) => (
              <div color={pokemonType.color} key={pokemonType.name}>
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/${pokemonType.name}.png`}
                  alt=""
                />
                <span>{pokemonType.name}</span>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="pokemon-image">
        {pokemon.image && (
          <img src={pokemon.image} alt={`Imagem do pokémon ${name}`} />
        )}
      </div>
    </Link>
  );
};
