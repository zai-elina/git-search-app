import React, { FC } from "react";
import { useAppSelector } from "../../store/reduxHook";
import { selectUserListLength } from "../../store/selectors/userListSelector";
import * as S from "./CardListFooter.style";
import { formatNumber } from "../../utilities/formatNumber";
import Pagination from "../pagination/Pagination";

interface ICardListFooterProps {
  pageNumber: number;
  setPageNumber: (page: number) => void;
  setSkip: (isSkip: boolean) => void;
}

const CardListFooter: FC<ICardListFooterProps> = ({
  pageNumber,
  setPageNumber,
  setSkip,
}) => {
  const countResult = useAppSelector(selectUserListLength);

  return (
    <S.CardFooterContainer>
      <S.CardFooterUserCount>
        Пользователей: {formatNumber(countResult)}
      </S.CardFooterUserCount>
      <Pagination
        countResult={countResult <= 1000 ? countResult : 1000}
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
        setSkip={setSkip}
      />
    </S.CardFooterContainer>
  );
};

export default CardListFooter;
