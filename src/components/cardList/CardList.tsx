import React, { FC } from "react";
import Card from "../card/Card";
import * as S from "./CardList.styles";

interface Props {}

const CardList: FC<Props> = (props) => {
  return (
    <S.CardList>
      <Card
        imageUrl={"https://avatars.githubusercontent.com/u/75142873?v=4&s=180"}
        login={'zai-elina'}
      />
    </S.CardList>
  );
};

export default CardList;
