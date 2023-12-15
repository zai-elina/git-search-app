import React, { FC } from "react";
import * as S from "./NotFoundPage.styles";

export const NotFoundPage: FC = () => {
  return (
    <S.Main>
      <S.NotFound>Страница не найдена</S.NotFound>
    </S.Main>
  );
};
