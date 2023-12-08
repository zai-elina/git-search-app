import { styled } from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  gap: 16px;
  padding: 16px 24px 16px 16px;
  border-radius: 16px;
  align-items: center;
  flex-wrap: wrap;
  &:hover {
    background: #f2f4f8;
  }
`;

export const CardImageContainer = styled.div`
  height: 125px;
`;
export const CardImage = styled.img`
  border-radius: 12px;
  object-fit: cover;
  max-height: 100%;
`;
export const CardSvg = styled.div`
  width: 30px;
  height: 30px;
`;
export const CardText = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
