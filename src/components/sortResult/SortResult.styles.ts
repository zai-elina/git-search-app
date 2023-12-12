import { styled } from "styled-components";

export const Sorting = styled.div`
  margin-top: 20px;
  text-align: center;
  display: flex;
  gap: 10px;
  align-items: center;
  flex-wrap: wrap;
  @media screen and (max-width: 539px) {
    font-size: 14px;
  }
`;

interface SortTypeProps {
  $active: boolean;
}
export const SortingType = styled.button<SortTypeProps>`
  border-radius: 4px;
  border: 2px solid #e8eaee;
  background: ${(props) => (props.$active ? "#F2F4F8" : "#fff")};
  height: 32px;
  padding: 0px 12px;
  text-align: center;
`;
export const SortingTypeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;
