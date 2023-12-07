import React, { FC } from "react";
import SearchInput from "./searchInput/SearchInput";
import ButtonSubmit from "./buttonSubmit/ButtonSubmit";
import { FormStyle } from "./Form.styles";

interface Props {}

const Form: FC<Props> = (props) => {
  return (
    <FormStyle name="searchUser">
      <SearchInput />
      <ButtonSubmit />
    </FormStyle>
  );
};

export default Form;
