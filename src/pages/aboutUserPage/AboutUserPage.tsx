import React, { useEffect } from "react";
import { useParams } from "react-router";
import * as S from "./AboutUserPage.styles";
import { useGetUserQuery } from "../../store/services/api";
import LoadingSpinner from "../../components/loadingSpinner/LoadingSpinner";
import { useAppDispatch } from "../../store/reduxHook";
import { changeSelectedUser } from "../../store/slice/userInfoSlice";
import UserMainInfo from "../../components/userMainInfo/UserMainInfo";
import UserRepositories from "../../components/userRepositories/UserRepositories";

const AboutUserPage: React.FC = () => {
  const { login } = useParams();
  const { data, isLoading, error } = useGetUserQuery(login ?? "");
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!error && data) {
      dispatch(changeSelectedUser(data));
    }
  }, [data, dispatch, error]);

  return (
    <S.AboutUser>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <S.AboutUserContainer>
          <UserMainInfo />
          {data?.public_repos !== 0 && <UserRepositories />}
        </S.AboutUserContainer>
      )}
    </S.AboutUser>
  );
};

export default AboutUserPage;
