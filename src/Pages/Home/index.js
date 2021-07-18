import React, { useState } from "react";
import List from "../../components/List";
import { useHistory } from "react-router-dom";

const Home = () => {
  const history = useHistory();
  const [namePokemon, setNamePokemon] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/${namePokemon}`);
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

          <button onClick={handleSubmit}>Procurar</button>
        </form>
      </div>

      <List />
    </div>
  );
};

export default Home;
