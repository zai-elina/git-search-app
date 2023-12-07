import styled from "styled-components";

export const InputSearchContainer = styled.div`
  position: relative;
`;

export const InputSearch = styled.input`
  width: 40vw;
  padding: 24px 24px 24px 58px;
  border-radius: 12px;
  background: #f2f4f8;
  border: none;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 26px;
  color: #000;
  &:focus {
    box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  }
  &:focus-visible {
    outline: none;
  }
  &::placeholder {
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 26px;
    color: #000;
  }
  &::-webkit-search-cancel-button {
    -webkit-appearance: none;
    width: 17px;
    height: 16px;
    margin-right: 2px;
    cursor: pointer;
    background-image: url(${require("../../assets/img/Cross-icon.svg")
      .default});
    background-size: cover;
  }
`;

export const SearchIon = styled.svg`
  position: absolute;
  top: 24px;
  left: 24px;
  width: 25px;
  height: 25px;
`;
