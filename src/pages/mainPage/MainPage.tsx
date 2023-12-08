import React, { ChangeEventHandler, FC, useEffect, useState } from "react";
import * as S from "./MainPage.styles";
import FormSearch from "../../components/formSearch/FormSearch";
import CardList from "../../components/cardList/CardList";
import CardListFooter from "../../components/cardListFooter/CardListFooter";
import { useAppDispatch, useAppSelector } from "../../store/reduxHook";
import { selectUserListLength } from "../../store/selectors/userListSelector";
import { IUserSearchData, useSearchUserQuery } from "../../store/services/api";
import { SubmitHandler } from "react-hook-form";
import {
  changeIsLoadingUserList,
  changeUserList,
  changeUserListLength,
} from "../../store/slice/userListSlice";
import LoadingSpinner from "../../components/loadingSpinner/LoadingSpinner";

export type Inputs = {
  userName: string;
};

const MainPage: FC = () => {
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

  const onChange: ChangeEventHandler<HTMLFormElement> = (event) => {
    console.log(event.target.value);
  };

  const countResult = useAppSelector(selectUserListLength);
  return (
    <S.Main>
      <FormSearch onSubmit={onSubmit} onChange={onChange} />
      {isLoading && <LoadingSpinner />}
      <CardList />
      {countResult !== 0 && <CardListFooter />}
    </S.Main>
  );
};

export default MainPage;
