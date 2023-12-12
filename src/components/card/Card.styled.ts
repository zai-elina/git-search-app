import { styled } from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  border-radius: 16px;
  align-items: center;
  flex-wrap: wrap;
  transition: all ease-in-out 0.3s;
  &:hover {
    background: #f2f4f8;
    cursor: pointer;
  }
`;

export const CardImageContainer = styled.div`
  height: 150px;
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
  max-width: 150px;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 18px;
  font-weight: bold;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
