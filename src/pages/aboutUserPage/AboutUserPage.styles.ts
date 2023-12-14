import styled from "styled-components";

export const AboutUser = styled.main`
  border-radius: 20px;
  background: #fff;
  padding: 50px;
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  @media screen and (max-width: 769px) {
    padding: 16px;
  }
`;

export const AboutUserContainer = styled.div`
  display: grid;
  grid-template-columns: 250px 1fr;
  gap: 24px;
  @media screen and (max-width: 675px) {
    grid-template-columns: 1fr;
  }
`;