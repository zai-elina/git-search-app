import { styled } from "styled-components";

export const ButtonSubmit = styled.button`
  border-radius: 12px;
  background: #000;
  color: #fff;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  padding: 20px;
  @media screen and (max-width: 900px) {
    font-size: 14px;
    padding: 10px;
  }
  @media screen and (max-width: 445px) {
    display: none;
  }
`;
