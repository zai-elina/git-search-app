import React, { FC } from "react";
import { Main } from "./MainPage.styles";
import Form from "../../components/form/Form";

interface Props {}

const MainPage: FC<Props> = (props) => {
  return (
    <Main>
      <Form />
    </Main>
  );
};

export default MainPage;
