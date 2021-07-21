import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import pokeball from "../../assets/images/pokeball.png";
import {
  Info,
  NameId,
  Pokeball,
  PokemonContainer,
  Pokemonview,
  Stats,
  Types,
} from "./styles";
import { useTheme } from "styled-components";
import Evolution from "../../components/Evolution";

const ViewPokemon = () => {
  const [pokemon, setPokemon] = useState(null);
  const [backgroundColor, setBackgroundColor] = useState("grass");
  const { name } = useParams();
  const { colors } = useTheme();

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((r) => r.json())
      .then((resultPokemon) => {
        setBackgroundColor(resultPokemon.types[0].type.name);
        setPokemon(resultPokemon);
      });
  }, [name]);

  if (!pokemon) {
    return null;
  }

  return (
    <Pokemonview color={colors.backgroundType[backgroundColor]}>
      {pokemon && (
        <div className="view-container">
          <Pokeball>
            <img src={pokeball} alt="" />
          </Pokeball>
          <NameId>
            <h1>{pokemon.name}</h1>
            <h2># {pokemon.id}</h2>
          </NameId>
          <PokemonContainer>
            <img
              src={pokemon.sprites.other["official-artwork"].front_default}
              alt=""
            />
            <Types>
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
            </Types>
            <Info>
              <div className="weight">
                <p>{pokemon.weight / 10}kg</p>
                <p>Weight</p>
              </div>
              <div className="height">
                <p>{pokemon.height / 10}m</p>
                <p>Height</p>
              </div>
              <div className="abilities">
                {pokemon.abilities.map((pokeabilities) => {
                  return (
                    <p key={pokeabilities.ability.name}>
                      {pokeabilities.ability.name}
                    </p>
                  );
                })}
                <p>Moves</p>
              </div>
            </Info>
            <Stats>
              <ul>
                {pokemon.stats.map((pokestats) => {
                  return (
                    <li key={pokestats.stat.name}>
                      {pokestats.stat.name} <span>{pokestats.base_stat}</span>
                    </li>
                  );
                })}
              </ul>
            </Stats>
            <Evolution name={name} />
          </PokemonContainer>
        </div>
      )}
    </Pokemonview>
  );
};

export default ViewPokemon;
