import React, { FC } from "react";
import {
  InputSearch,
  InputSearchContainer,
  SearchIon,
} from "./SearchInput.styles";
import { UseFormRegister } from "react-hook-form";
import { Inputs } from "../FormSearch";

interface Props {
  register: UseFormRegister<Inputs>;
}

const SearchInput: FC<Props> = ({ register }) => {
  return (
    <InputSearchContainer>
      <SearchIon
        width="24"
        height="25"
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Search icon">
          <path
            id="Search icon_2"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16.5483 9.80256C16.5483 13.5677 13.5072 16.6051 9.77417 16.6051C6.0411 16.6051 3 13.5677 3 9.80256C3 6.0374 6.0411 3 9.77417 3C13.5072 3 16.5483 6.0374 16.5483 9.80256ZM15.0139 18.079C13.4996 19.0453 11.702 19.6051 9.77417 19.6051C4.37604 19.6051 0 15.2164 0 9.80256C0 4.38876 4.37604 0 9.77417 0C15.1723 0 19.5483 4.38876 19.5483 9.80256C19.5483 12.1971 18.6922 14.3912 17.2702 16.0936L23.4844 22.3511L21.3704 24.4797L15.0139 18.079Z"
            fill="black"
          />
        </g>
      </SearchIon>
      <InputSearch
        type="search"
        placeholder="Введите логин пользователя"
        autoComplete="on"
        {...register("userName")}
      />
    </InputSearchContainer>
  );
};

export default SearchInput;
