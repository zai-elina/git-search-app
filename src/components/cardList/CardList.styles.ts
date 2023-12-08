import { styled } from "styled-components";

export const CardList = styled.div`
  padding: 24px 0;
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  border-bottom: 1px solid #f2f4f8;
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 15px;
  }
  @media screen and (max-width: 620px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media screen and (max-width: 480px) {
    grid-template-columns: minmax(0, 1fr);
  }
`;
