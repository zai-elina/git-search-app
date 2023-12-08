import React, { FC, useEffect, useState } from "react";
import SearchInput from "./searchInput/SearchInput";
import ButtonSubmit from "./buttonSubmit/ButtonSubmit";
import { FormStyle } from "./FormSearch.styles";
import { useForm, SubmitHandler } from "react-hook-form";
import { IUserSearchData, useSearchUserQuery } from "../../store/services/api";
import { useAppDispatch } from "../../store/reduxHook";
import {
  changeIsLoadingUserList,
  changeUserList,
  changeUserListLength,
} from "../../store/slice/userListSlice";

export type Inputs = {
  userName: string;
};

interface Props {}

const Form: FC<Props> = (props) => {
  const { register, handleSubmit } = useForm<Inputs>();
  const [skip, setSkip] = useState(true);
  const [searchData, setSearchData] = useState<IUserSearchData>({
    userName: "",
  });
  const { data, isLoading, error } = useSearchUserQuery(searchData, {
    skip,
  });
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isLoading) {
      dispatch(changeIsLoadingUserList({}));
    } else if (data && !error) {
      dispatch(changeUserList(data.items));
      dispatch(changeUserListLength(data.total_count));
    }
  }, [isLoading, data, error, dispatch]);

  const onSubmit: SubmitHandler<Inputs> = (values) => {
    setSkip(false);
    setSearchData(values);
  };

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
