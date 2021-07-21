import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: row;
  height: 90vh;
  background: ${({ theme }) => theme.colors.backgroundType.steel};
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-left: 230px;

  > h1 {
    position: relative;
    margin-top: 30px;
    font-weight: 400;

    font-size: 72px;
    > span {
      font-weight: 700;
    }
  }

  > h2 {
    display: flex;
    align-items: flex-start;
    font-weight: 400;
    font-size: 32px;
  }

  > button {
    display: flex;
    position: relative;
    justify-content: center;
    align-self: flex-start;
    align-items: center;
    margin-bottom: 90px;

    font-weight: 700;
    font-size: 23px;

    width: 231px;
    height: 66px;

    background: #73d677;
    box-shadow: inset 0px -9px 0px rgba(0, 0, 0, 0.18);
    border-radius: 11px;
  }
`;

export const Banner = styled.div`
  display: flex;
  justify-content: flex-end;
  > img {
  }
`;
