import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IUser, IUserInfo } from "../../type";

const hostDomain = "https://api.github.com/";

export interface IUserSearchData {
  userName: string;
  sort?: string;
  page?: number;
  order?: string;
}

export interface IUserSearchResult {
  total_count: number;
  incomplete_results: boolean;
  items: IUser[];
}

const apiToken = process.env.REACT_APP_API_TOKEN;

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: `${hostDomain}`,
    headers: {
      Authorization: `Bearer ${apiToken}`,
    },
  }),
  endpoints: (builder) => ({
    searchUser: builder.query<IUserSearchResult, IUserSearchData>({
      query: (value) => {
        const { userName, page, sort, order } = value;

        if (userName) {
          const request = `search/users?q=${userName}`;
          const sorted = sort ? `&sort=${sort}` : "";
          const orderBy = order ? `&order=${order}` : "";
          const numberOfPage = page ? `&page=${page}` : "";

          return `${request}${sorted}${orderBy}${numberOfPage}`;
        }

        return `search/users`;
      },
    }),
    getUser: builder.query<IUserInfo, string>({
      query: (login) => `users/${login}`,
    }),
  }),
});

export const { useSearchUserQuery, useGetUserQuery } = api;
