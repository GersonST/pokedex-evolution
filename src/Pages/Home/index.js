import React from "react";
import banner from "../../assets/images/banner.png";
import { useHistory } from "react-router-dom";
import { Main, TextWrapper, Banner } from "./styles";

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
    <Main>
      <TextWrapper>
        <h1>
          <span>Find</span> all your favorite <span>Pokemon</span>
        </h1>
        <h2>
          You can know the type of Pokemon, its strengths, disavantages and
          abilities
        </h2>
        <button onClick={handleRandomPokemon}>Try your Lucky</button>
      </TextWrapper>
      <Banner>
        <img src={banner} alt="Banner do Pikachu" />
      </Banner>
    </Main>
  );
};

export default Home;
