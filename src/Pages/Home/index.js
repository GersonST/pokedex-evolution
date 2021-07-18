import React, { useState } from "react";
import List from "../../components/List";
import { useHistory } from "react-router-dom";
import "./styles.scss";

const Home = () => {
  const history = useHistory();
  const [namePokemon, setNamePokemon] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/${namePokemon}`);
  };

  return (
    <div className="home">
      <div className="form-container">
        <form className="form-pokemon">
          <input
            type="text"
            placeholder="ex: pikachu"
            onChange={(e) => {
              setNamePokemon(e.target.value);
            }}
          />

          <button className="btn-search" onClick={handleSubmit}>
            Procurar
          </button>
        </form>
      </div>

      <List />
    </div>
  );
};

export default Home;
