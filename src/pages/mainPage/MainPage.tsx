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
import SortResult from "../../components/sortResult/SortResult";

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
  const [selectedOrder, setSelectedOrder] = useState("");
  const [infoForUser, setInfoForUser] = useState("");

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
      if (data.total_count === 0) {
        setInfoForUser("Пользователь с таким логином не найден");
      }
    }
  }, [data, error, dispatch]);

  const handleOrderChange = (value: string) => {
    if (selectedOrder === value) {
      setSelectedOrder("");
      setSearchData((prevSearchData) => ({
        ...prevSearchData,
        order: "",
        sort: "",
      }));
    } else {
      setSelectedOrder(value);
      setSearchData((prevSearchData) => ({
        ...prevSearchData,
        order: value,
        sort: "repositories",
      }));
    }
  };

  const onSubmit: SubmitHandler<Inputs> = (values) => {
    if (values.userName) {
      setSearchData(values);
      setSearchData({
        ...values,
        order: selectedOrder,
        sort: selectedOrder ? "repositories" : "",
      });
      setSkip(false);
      setPageNumber(1);
    }
  };

  return (
    <S.Main>
      <FormSearch onSubmit={onSubmit} />
      <SortResult
        handleOrderChange={handleOrderChange}
        selectedOrder={selectedOrder}
      />
      {isLoading && <LoadingSpinner />}
      <CardList />
      {countResult !== 0 ? (
        <CardListFooter
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
          setSkip={setSkip}
        />
      ) : (
        infoForUser
      )}
    </S.Main>
  );
};

export default MainPage;
