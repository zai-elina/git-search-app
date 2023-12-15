import React, { FC } from "react";
import { Rings } from "react-loader-spinner";
import * as S from "./LoadingSpinner.styles";


const LoadingSpinner: FC = () => {
  return (
    <S.CardListLoading>
      <Rings
        height="300"
        width="300"
        color="#999FAA"
        radius="6"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="rings-loading"
      />
    </S.CardListLoading>
  );
};

export default LoadingSpinner;
