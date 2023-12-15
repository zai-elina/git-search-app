import React, { FC } from "react";
import { IRepo } from "../../../type";
import * as S from "./Repository.styles";

interface IRepositoryRepo {
  repo: IRepo;
}

const Repository: FC<IRepositoryRepo> = ({ repo }) => {
  const {
    name,
    language,
    description,
    html_url,
    stargazers_count,
    watchers_count,
  } = repo;
  return (
    <S.RepoContainer onClick={() => window.open(html_url, "_blank")}>
      <h5>{name}</h5>
      {description && <div>{description}</div>}
      <S.RepoContainerFooter>
        {language && (
          <div>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14 4H6V20H18V8L14 4ZM13 9H17V19H7V5H13V9ZM14 8V5L17 8H14Z"
                fill="#1C2E45"
                fillOpacity="0.6"
              />
              <path
                d="M10.2 17H9.5L7.5 14.5L9.5 12H10.2L8.2 14.5L10.2 17Z"
                fill="#1C2E45"
                fillOpacity="0.6"
              />
              <path
                d="M13.8 17H14.5L16.5 14.5L14.5 12H13.8L15.8 14.5L13.8 17Z"
                fill="#1C2E45"
                fillOpacity="0.6"
              />
              <path
                d="M10.7 18H11.3L13.4 11H12.6L10.7 18Z"
                fill="#1C2E45"
                fillOpacity="0.6"
              />
            </svg>
            <S.RepoLanguage>{language}</S.RepoLanguage>
          </div>
        )}
        {stargazers_count !== 0 && (
          <div>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.8 9.8L14.3 9L11.9 4L9.5 9L4 9.8L7.9 13.6L7 19L11.9 16.5L16.8 19.1L15.9 13.6L19.8 9.8ZM11.9 15.4L8.3 17.3L9 13.3L6.1 10.5L10.1 9.9L11.9 6.3L13.7 9.9L17.7 10.5L14.8 13.3L15.5 17.3L11.9 15.4Z"
                fill="#1C2E45"
                fillOpacity="0.6"
              />
            </svg>

            {stargazers_count}
          </div>
        )}
        {watchers_count !== 0 && (
          <div>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 7C5.3 7 4 12.1 4 12.1C4 12.1 6.2 16.2 11.9 16.2C17.6 16.2 20 12.2 20 12.2C20 12.2 18.7 7 12 7ZM9.3 8.5C9.8 8.2 10.6 8.2 10.6 8.2C10.6 8.2 10.1 9.1 10.1 9.8C10.1 10.5 10.3 10.9 10.3 10.9L9.2 11.1C9.2 11.1 8.9 10.6 8.9 9.9C8.9 9.1 9.3 8.5 9.3 8.5ZM11.9 15.2C7.8 15.2 5.7 12.9 5.1 12C5.4 11.3 6.2 9.8 8.2 8.8C8.1 9.2 8 9.6 8 10.1C8 12.3 9.8 14.1 12 14.1C14.2 14.1 16 12.3 16 10.1C16 9.6 15.9 9.2 15.8 8.8C17.8 9.7 18.6 11.3 18.9 12C18.2 12.9 16.1 15.2 11.9 15.2Z"
                fill="#1C2E45"
                fillOpacity="0.6"
              />
            </svg>
            {watchers_count}
          </div>
        )}
      </S.RepoContainerFooter>
    </S.RepoContainer>
  );
};

export default Repository;
