import React from "react";
import Banner from "../../assets/images/banner.png";
import { useHistory } from "react-router-dom";

const Home = () => {
  const history = useHistory();

  // Função para gerar Id aleatório de Pokemon utilizado no botão Try your Lucky
  const handleRandomPokemon = () => {
    const min = 1;
    const max = 700;
    const ranId = Math.floor(Math.random() * (max - min)) + min;

    history.push(`/pokedex/${ranId}`);
  };

  return (
    <main className="home">
      <div className="text-wrapper">
        <h1>Find all your favorite Pokemon</h1>
        <h2>
          You can know the type of Pokemon, its strengths, disavantages and
          abilities
        </h2>
        <button onClick={handleRandomPokemon}>Try your Lucky</button>
        <div className="banner">
          <img src={Banner} alt="Banner do Pikachu" />
        </div>
      </div>
    </main>
  );
};

export default Home;
