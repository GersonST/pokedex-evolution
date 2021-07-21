import styled from "styled-components";

export const PokedexWrapper = styled.div`
  padding: 0 70px 0 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Search = styled.div`
  display: flex;
  justify-content: center;
  padding: 80px;
  margin-bottom: 70px;
`;

export const Pokemons = styled.div`
  flex: 1;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 100px;
`;

export const ButtonMore = styled.button`
  margin-top: 100px;
  align-self: center;

  margin-bottom: 90px;

  font-weight: 700;
  font-size: 23px;

  width: 231px;
  height: 66px;

  background: #73d677;
  box-shadow: inset 0px -9px 0px rgba(0, 0, 0, 0.18);
  border-radius: 11px;
`;
