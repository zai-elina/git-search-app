import React, { FC } from "react";
import Card from "../card/Card";
import * as S from "./CardList.styles";
import { useAppSelector } from "../../store/reduxHook";
import { selectUserList } from "../../store/selectors/userListSelector";
import { useNavigate } from "react-router";
import { IUser } from "../../type";

const CardList: FC = () => {
  const userList = useAppSelector(selectUserList);
  const navigate = useNavigate();

  const onClick = (login: string) => {
    navigate(`/users/${login}`);
  };

  return (
    <S.CardList>
      {userList?.map((user:IUser) => (
        <Card
          key={user.id}
          imageUrl={user.avatar_url}
          login={user.login}
          onClick={() => onClick(user.login)}
        />
      ))}
    </S.CardList>
  );
};

export default CardList;
