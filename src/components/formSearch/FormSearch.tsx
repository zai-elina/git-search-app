import React, { ChangeEventHandler, FC } from "react";
import SearchInput from "./searchInput/SearchInput";
import ButtonSubmit from "./buttonSubmit/ButtonSubmit";
import { FormStyle } from "./FormSearch.styles";
import { useForm, SubmitHandler } from "react-hook-form";

export type Inputs = {
  userName: string;
};

interface IFormSearchProps {
  onSubmit: SubmitHandler<Inputs>;
  onChange: ChangeEventHandler<HTMLFormElement>;
}

const FormSearch: FC<IFormSearchProps> = ({ onSubmit, onChange }) => {
  const { register, handleSubmit } = useForm<Inputs>();

  return (
    <form
      name="searchUser"
      onSubmit={handleSubmit(onSubmit)}
      onChange={onChange}
    >
      <FormStyle>
        <SearchInput register={register} />
        <ButtonSubmit />
      </FormStyle>
    </form>
  );
};

export default FormSearch;
