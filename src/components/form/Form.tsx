import React, { FC } from "react";
import SearchInput from "./searchInput/SearchInput";
import ButtonSubmit from "./buttonSubmit/ButtonSubmit";
import { FormStyle } from "./Form.styles";
import { useForm, SubmitHandler } from "react-hook-form";

export type Inputs = {
  search: string;
};

interface Props {}

const Form: FC<Props> = (props) => {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <form name="searchUser" onSubmit={handleSubmit(onSubmit)}>
      <FormStyle>
        <SearchInput register={register} />
        <ButtonSubmit />
      </FormStyle>
    </form>
  );
};

export default Form;
