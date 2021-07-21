import React, { useCallback, useEffect, useState } from "react";

import axios from "axios";
import {
  SectionEvolution,
  EvolutionPokemon,
  EvolutionPokemonImage,
} from "./styles";

const Evolution = ({ name }) => {
  const [pokemonsFamily, setPokemonsFamily] = useState([]);
  const [evolvesPokemon, setEvolvesPokemon] = useState([]);

  // Função para navegar dentro da árvore de evolução

  const handleNameSpecies = useCallback(
    ({ species, evolves_to, evolution_details }) => {
      let namesPokemons = [
        {
          name: species.name,
          level: 0,
        },
      ];

      if (evolution_details.length)
        namesPokemons[0].level = evolution_details[0].min_level;

      evolves_to.forEach((evolves) => {
        namesPokemons = namesPokemons.concat(handleNameSpecies(evolves));
      });

      return namesPokemons;
    },
    []
  );

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon-species/${name}`)
      .then((responseSpecies) => {
        const url = responseSpecies.data.evolution_chain.url;

        axios.get(url).then((responseEvolution) => {
          const species = handleNameSpecies(responseEvolution.data.chain);
          setPokemonsFamily(species);
        });
      });
  }, [name, handleNameSpecies]);

  useEffect(() => {
    if (pokemonsFamily.length) {
      const urlsAxios = pokemonsFamily.map((p) =>
        axios.get(`https://pokeapi.co/api/v2/pokemon/${p.name}`)
      );

      Promise.all([...urlsAxios]).then((responses) => {
        const result = responses.map((response, index) => {
          const { id, sprites } = response.data;
          return {
            ...pokemonsFamily[index],
            number: `#${"000".substr(id.toString().length)}${id}`,
            image: sprites.other["official-artwork"].front_default,
          };
        });
        console.log(result);
        setEvolvesPokemon(result);
      });
    }
  }, [pokemonsFamily]);

  return (
    <SectionEvolution>
      {evolvesPokemon.length ? (
        evolvesPokemon.slice(0, 6).map((evolves, index) => (
          <React.Fragment key={evolves.level}>
            {index !== 0 && (
              <EvolutionPokemon>
                <p>(Level {evolves.level || "null"})</p>
              </EvolutionPokemon>
            )}
            <EvolutionPokemon>
              <EvolutionPokemonImage to={`/pokedex/${evolves.name}`}>
                <img
                  src={evolves.image}
                  alt={`Imagem do pokémon ${evolves.name}`}
                />
              </EvolutionPokemonImage>
              <p>{evolves.number}</p>
              <h4>{evolves.name}</h4>
            </EvolutionPokemon>
          </React.Fragment>
        ))
      ) : (
        <h1 style={{ textAlign: "center" }}>Loading...</h1>
      )}
    </SectionEvolution>
  );
};
export default Evolution;
