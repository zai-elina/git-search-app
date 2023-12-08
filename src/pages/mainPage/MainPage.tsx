import React, { FC } from "react";
import { Main } from "./MainPage.styles";
import Form from "../../components/form/Form";
import CardList from "../../components/cardList/CardList";

interface Props {}

const MainPage: FC<Props> = (props) => {
  return (
    <Main>
      <Form />
      <CardList />
    </Main>
  );
};

export default MainPage;
