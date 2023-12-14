import React, { FC, useEffect } from "react";
import SearchInput from "./searchInput/SearchInput";
import ButtonSubmit from "./buttonSubmit/ButtonSubmit";
import * as S from "./FormSearch.styles";
import { useForm, SubmitHandler } from "react-hook-form";

export type Inputs = {
  userName: string;
};

interface IFormSearchProps {
  onSubmit: SubmitHandler<Inputs>;
}

const FormSearch: FC<IFormSearchProps> = ({ onSubmit }) => {
  const { register, handleSubmit, setValue } = useForm<Inputs>();

  useEffect(() => {
    const storedUserName = sessionStorage.getItem("searchUser");
    if (storedUserName) {
      setValue("userName", storedUserName);
    }
  }, [setValue]);

  return (
    <form name="searchUser" onSubmit={handleSubmit(onSubmit)}>
      <S.FormStyle>
        <SearchInput register={register} />
        <ButtonSubmit />
      </S.FormStyle>
    </form>
  );
};

export default FormSearch;
