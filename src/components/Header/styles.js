import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderPokemon = styled.header`
  display: flex;
  justify-content: space-between;
  height: 93px;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.background.header};
`;

export const HeaderLinks = styled(Link)`
  font-size: 25px;
  color: ${({ theme }) => theme.colors.text.black};
  line-height: 29px;
  margin-right: 100px;
  > img {
    margin-left: 100px;
    width: 160px;
  }
`;

export const HeaderA = styled.a`
  font-size: 25px;
  color: ${({ theme }) => theme.colors.text.black};
  line-height: 29px;
  margin-right: 100px;
`;
