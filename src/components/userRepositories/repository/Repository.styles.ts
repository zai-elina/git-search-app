import { styled } from "styled-components";

export const RepoContainer = styled.div`
  width: 48%;
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 16px;
  border-radius: 16px;
  border: 1px solid #999faa;
  flex-wrap: wrap;
  justify-content: space-between;
  transition: all ease-in-out 0.3s;
  &:hover {
    background: #f2f4f8;
    cursor: pointer;
  }
  @media screen and (max-width: 1000px) {
    width: 100%;
  }
`;

export const RepoContainerFooter = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
`;

export const RepoLanguage = styled.div`
  display: inline-block;
  font-weight: 500;
  color: #999faa;
`;
