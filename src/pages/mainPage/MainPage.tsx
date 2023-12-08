import React, { FC, useEffect, useState } from "react";
import * as S from "./MainPage.styles";
import FormSearch from "../../components/formSearch/FormSearch";
import CardList from "../../components/cardList/CardList";
import CardListFooter from "../../components/cardListFooter/CardListFooter";
import { useAppDispatch, useAppSelector } from "../../store/reduxHook";
import { selectUserListLength } from "../../store/selectors/userListSelector";
import { IUserSearchData, useSearchUserQuery } from "../../store/services/api";
import { SubmitHandler } from "react-hook-form";
import {
  changeUserList,
  changeUserListLength,
} from "../../store/slice/userListSlice";
import LoadingSpinner from "../../components/loadingSpinner/LoadingSpinner";

export type Inputs = {
  userName: string;
};

const MainPage: FC = () => {
  const [skip, setSkip] = useState(true);
  const [pageNumber, setPageNumber] = useState(1);
  const [searchData, setSearchData] = useState<IUserSearchData>({
    userName: "",
    page: pageNumber,
  });
  const { data, isLoading, error } = useSearchUserQuery(searchData, {
    skip,
  });
  const dispatch = useAppDispatch();
  const countResult = useAppSelector(selectUserListLength);

  useEffect(() => {
    setSearchData((prevSearchData) => ({
      ...prevSearchData,
      page: pageNumber,
    }));
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pageNumber]);

  useEffect(() => {
    if (data && !error) {
      dispatch(changeUserList(data.items));
      dispatch(changeUserListLength(data.total_count));
    }
  }, [data, error, dispatch]);

  const onSubmit: SubmitHandler<Inputs> = (values) => {
    setSkip(false);
    setSearchData(values);
    setPageNumber(1);
  };

  return (
    <S.Main>
      <FormSearch onSubmit={onSubmit} />
      {isLoading && <LoadingSpinner />}
      <CardList />
      {countResult !== 0 && (
        <CardListFooter
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
          setSkip={setSkip}
        />
      )}
    </S.Main>
  );
};

export default MainPage;
