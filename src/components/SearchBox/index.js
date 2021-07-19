import React, { useState, useCallback } from "react";
import { useHistory } from "react-router-dom";

const SearchBox = ({ value, onChange }) => {
  const history = useHistory();
  const [namePokemon, setNamePokemon] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/pokedex/${namePokemon}`);
  };

  return (
    <div className="home">
      <div className="form-container">
        <form className="form-pokemon">
          <input
            type="text"
            value={value}
            placeholder="Qual Pokémon você está procurando?"
            onChange={(e) => {
              onChange(e.target.value);
            }}
          />

          <button className="btn-search" onClick={handleSubmit}>
            Procurar
          </button>
        </form>
      </div>
    </div>
  );
};

export default SearchBox;
