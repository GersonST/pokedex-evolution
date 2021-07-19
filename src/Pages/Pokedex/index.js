import React, { useState, useEffect, useCallback } from "react";
import SearchBox from "../../components/SearchBox";
import axios from "axios";
import { CardPokemon } from "./../../components/CardPokemon/index";

const Pokedex = () => {
  const NUMBER_POKEMONS = 9;
  const NUMBER_MAX_POKEMONS_API = 750;

  const [pokemons, setPokemons] = useState([]);

  const [pokemonSearch, setPokemonSearch] = useState("");
  const [pokemonsOffsetApi, setPokemonsOffsetApi] = useState(NUMBER_POKEMONS);

  //Filtrar Pokemons a partir de string do input de busca
  const handleSearchPokemons = useCallback(async () => {
    const response = await axios.get("https://pokeapi.co/api/v2/pokemon/", {
      params: {
        limit: NUMBER_MAX_POKEMONS_API,
      },
    });

    setPokemonSearch(pokemonSearch.toLocaleLowerCase());

    //Validação dos nomes dos pokemons
    const pokemonsSearch = response.data.results.filter(({ name }) =>
      name.includes(pokemonSearch)
    );

    setPokemons(pokemonsSearch);
  }, [pokemonSearch]);

  //Carrega lista inicial de pokemons

  const handlePokemonsListDefault = useCallback(async () => {
    const response = await axios.get("https://pokeapi.co/api/v2/pokemon/", {
      params: {
        limit: NUMBER_POKEMONS,
      },
    });
    setPokemons(response.data.results);
  }, []);

  useEffect(() => {
    //A busca só é feita quando tiver na string 2 ou mais caracteres

    const isSearch = pokemonSearch.length >= 2;

    if (isSearch) handleSearchPokemons();
    else handlePokemonsListDefault();
  }, [pokemonSearch, handlePokemonsListDefault, handleSearchPokemons]);

  // Adiciona novos pokemons a lista

  const handleMorePokemons = useCallback(
    async (offset) => {
      const response = await axios.get("https://pokeapi.co/api/v2/pokemon/", {
        params: {
          limit: NUMBER_POKEMONS,
          offset,
        },
      });

      setPokemons((state) => [...state, ...response.data.results]);
      setPokemonsOffsetApi((state) => state + NUMBER_POKEMONS);
    },
    [NUMBER_POKEMONS]
  );

  return (
    <div className="home">
      <div className="form-container">
        <SearchBox value={pokemonSearch} onChange={setPokemonSearch} />
      </div>

      <div className="pokemon-cards">
        {pokemons.map((pokemon) => (
          <CardPokemon key={pokemon.name} name={pokemon.name} />
        ))}
      </div>

      {pokemonSearch.length <= 2 && (
        <button
          type="button"
          onClick={() => handleMorePokemons(pokemonsOffsetApi)}
        >
          CARREGAR MAIS
        </button>
      )}
    </div>
  );
};

export default Pokedex;
