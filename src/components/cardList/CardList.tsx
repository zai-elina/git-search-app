import React, { FC } from "react";
import Card from "../card/Card";
import * as S from "./CardList.styles";
import { useAppSelector } from "../../store/reduxHook";
import { selectUserList } from "../../store/selectors/userListSelector";

const CardList: FC = () => {
  const userList = useAppSelector(selectUserList);

  return (
    <S.CardList>
      {userList?.map((user) => (
        <Card key={user.id} imageUrl={user.avatar_url} login={user.login} />
      ))}
    </S.CardList>
  );
};

export default CardList;
