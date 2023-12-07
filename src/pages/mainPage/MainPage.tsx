import React, { FC } from "react";
import { Main } from "./MainPage.styles";
import SearchInput from "../../components/searchInput/SearchInput";

interface Props {}

const MainPage: FC<Props> = (props) => {
  return (
    <Main>
      <SearchInput />
    </Main>
  );
};

export default MainPage;
