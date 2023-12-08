import React, { FC } from "react";
import * as S from "./ButtonSubmit.styles";
interface Props {}

const ButtonSubmit: FC<Props> = (props) => {
  return <S.ButtonSubmit type="submit">Найти</S.ButtonSubmit>;
};

export default ButtonSubmit;
