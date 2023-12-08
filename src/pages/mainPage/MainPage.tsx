import React, { FC } from "react";
import { Main } from "./MainPage.styles";
import Form from "../../components/formSearch/FormSearch";
import CardList from "../../components/cardList/CardList";
import CardListFooter from "../../components/cardListFooter/CardListFooter";
import { useAppSelector } from "../../store/reduxHook";
import { selectUserListLength } from "../../store/selectors/userListSelector";

interface Props {}

const MainPage: FC<Props> = (props) => {
  const countResult = useAppSelector(selectUserListLength);
  return (
    <Main>
      <Form />
      <CardList />
      {countResult !== 0 && <CardListFooter />}
    </Main>
  );
};

export default MainPage;
