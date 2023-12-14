import React, { useEffect } from "react";
import * as S from "./UserRepositories.styles";
import { useGetUserRepositoriesQuery } from "../../store/services/api";
import { useParams } from "react-router-dom";
import { useAppDispatch } from "../../store/reduxHook";
import { changeSelectedUserPepos } from "../../store/slice/userInfoSlice";
import Repository from "./repository/Repository";
import LoadingSpinner from "../loadingSpinner/LoadingSpinner";

interface Props {}

const UserRepositories: React.FC<Props> = (props) => {
  const { login } = useParams();
  const { data, error, isLoading } = useGetUserRepositoriesQuery(login ?? "");
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!error && data) {
      dispatch(changeSelectedUserPepos(data));
    }
  }, [data, dispatch, error]);

  if (isLoading) return <LoadingSpinner />;

  return (
    <div>
      <S.UserRepoditoriesTitle>Репозитории</S.UserRepoditoriesTitle>
      <S.Repositories>
        {data?.map((repo) => (
          <Repository key={repo.id} repo={repo} />
        ))}
      </S.Repositories>
      <S.RepositoriesLink
        href={`https://github.com/${login}?tab=repositories`}
        target="_blank"
      >
        Посмотреть все
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.6 7.4L16.1 10.9H4V12.9H16.1L12.6 16.4L14 17.8L20 11.9L14 6L12.6 7.4Z"
            fill="#1C2E45"
            fillOpacity="0.6"
          />
        </svg>
      </S.RepositoriesLink>
    </div>
  );
};

export default UserRepositories;
