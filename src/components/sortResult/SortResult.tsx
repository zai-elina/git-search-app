import React, { FC } from "react";
import * as S from "./SortResult.styles";

interface ISortResult {
  handleOrderChange: (value: string) => void;
  selectedOrder: string;
}

const SortResult: FC<ISortResult> = ({ handleOrderChange, selectedOrder }) => {
  return (
    <S.Sorting>
      <div>Репозитории:</div>
      <S.SortingTypeContainer>
        <S.SortingType
          value={"desc"}
          onClick={() => handleOrderChange("desc")}
          $active={selectedOrder === "desc"}
        >
          по возрастанию
        </S.SortingType>
        <S.SortingType
          value={"asc"}
          onClick={() => handleOrderChange("asc")}
          $active={selectedOrder === "asc"}
        >
          по убыванию
        </S.SortingType>
      </S.SortingTypeContainer>
    </S.Sorting>
  );
};

export default SortResult;
