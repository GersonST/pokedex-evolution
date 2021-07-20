import styled from "styled-components";

export const FormPokemon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h2 {
    font-weight: 400;
    font-size: 35px;
    margin-bottom: 15px;

    span {
      font-weight: 800;
      font-size: 35px;
    }
  }
`;

export const InputPokemon = styled.input`
  background: #f2f2f2;
  /* blur16 */
  width: 1088px;
  height: 53px;
  box-shadow: 4px 4px 16px rgba(1, 28, 64, 0.2);
  border-radius: 40px;
  padding: 20px;
`;
