import React from "react";
import * as S from "./UserMainInfo.styles";
import { useAppSelector } from "../../store/reduxHook";
import { selectUserInfo } from "../../store/selectors/userInfoSelector";

const UserMainInfo: React.FC = () => {
  const user = useAppSelector(selectUserInfo);
  const {
    avatar_url,
    name,
    html_url,
    login,
    bio,
    followers,
    following,
    location,
    public_repos,
  } = user;

  return (
    <S.UserMainInfoContainer>
      <a href={html_url} target="_blank" rel="noreferrer">
        <S.UserMainInfoImg src={avatar_url} />
      </a>
      <S.UserMainInfoDesc>
        <S.UserName>{name}</S.UserName>
        <S.UserLogin href={html_url} target="_blank">
          @{login}
        </S.UserLogin>
        <S.UserText>{bio}</S.UserText>
        <S.UserFollow>
          <div>
            {followers}
            <S.UserText>Подписчиков</S.UserText>
          </div>
          <div>
            {following}
            <S.UserText>Подписок</S.UserText>
          </div>
        </S.UserFollow>
        {location && (
          <div>
            <svg
              viewBox="0 0 16 16"
              version="1.1"
              width="16"
              height="16"
              aria-hidden="true"
            >
              <path d="m12.596 11.596-3.535 3.536a1.5 1.5 0 0 1-2.122 0l-3.535-3.536a6.5 6.5 0 1 1 9.192-9.193 6.5 6.5 0 0 1 0 9.193Zm-1.06-8.132v-.001a5 5 0 1 0-7.072 7.072L8 14.07l3.536-3.534a5 5 0 0 0 0-7.072ZM8 9a2 2 0 1 1-.001-3.999A2 2 0 0 1 8 9Z"></path>
            </svg>
            {user.location}
          </div>
        )}
        <S.UserText>Публичных репозиториев: {public_repos}</S.UserText>
      </S.UserMainInfoDesc>
    </S.UserMainInfoContainer>
  );
};

export default UserMainInfo;
