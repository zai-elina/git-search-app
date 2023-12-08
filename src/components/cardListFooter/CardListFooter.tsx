import React, { FC } from "react";
import { useAppSelector } from "../../store/reduxHook";
import { selectUserListLength } from "../../store/selectors/userListSelector";
import * as S from "./CardListFooter.style";
import { formatNumber } from "../../utilities/formatNumber";
import Pagination from "../pagination/Pagination";

interface Props {}

const CardListFooter: FC<Props> = (props) => {
  const countResult = useAppSelector(selectUserListLength);

  return (
    <S.CardFooterContainer>
      <S.CardFooterUserCount>
        {formatNumber(countResult)} пользователей
      </S.CardFooterUserCount>
      <Pagination countResult={countResult}/>
    </S.CardFooterContainer>
  );
};

export default CardListFooter;