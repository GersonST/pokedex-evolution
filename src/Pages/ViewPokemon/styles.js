import styled from "styled-components";

export const Pokemonview = styled.div`
  background: ${(props) => props.color};
`;

export const Pokeball = styled.div`
  margin-left: 50vh;
  display: flex;
  opacity: 0.1;
  justify-content: center;
  align-items: center;

  > img {
    width: 300px;
    justify-content: center;
    align-items: center;
  }
`;

export const NameId = styled.div`
  display: flex;
  justify-content: space-around;

  > h1 {
    position: absolute;
    top: 20vh;
    left: 40vh;
    font-size: 40px;
    line-height: 32px;
    color: #ffffff;
    text-transform: capitalize;
  }

  > h2 {
    position: absolute;
    top: 20vh;
    right: 40vh;
    font-size: 30px;
    line-height: 32px;
    color: #ffffff;
    text-transform: capitalize;
  }
`;

export const PokemonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: white;
  margin-top: 50px;

  > img {
    width: 400px;
    position: absolute;
    top: 15vh;
  }
`;

export const Types = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: row;

  > div {
    padding: 15px;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: row;
  padding: 5px;
  grid-area: auto;
  justify-content: center;
  align-content: center;
`;

export const Stats = styled.div`
  display: flex;

  > ul {
    list-style: none;
  }
`;
