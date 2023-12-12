import React from "react";
import * as S from "./UserMainInfo.styles";
import { useAppSelector } from "../../store/reduxHook";
import { selectUserInfo } from "../../store/selectors/userInfoSelector";

const UserMainInfo: React.FC = () => {
  const user = useAppSelector(selectUserInfo);

  return (
    <S.UserMainInfoContainer>
      <S.UserMainInfoImg src={user.avatar_url} />
      <S.UserMainInfoDesc>
        <S.UserName>{user.name}</S.UserName>
        <S.UserLogin href={user.html_url} target="_blank">
          @{user.login}
        </S.UserLogin>
        <S.UserText>{user.bio}</S.UserText>
        <S.UserFollow>
          <div>Подписчиков: {user.followers}</div>
          <div>Подписок: {user.following}</div>
        </S.UserFollow>
      </S.UserMainInfoDesc>
    </S.UserMainInfoContainer>
  );
};

export default UserMainInfo;
