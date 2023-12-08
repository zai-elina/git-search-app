import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { User } from "../../type";

const hostDomain = "https://api.github.com/";

export interface IUserSearchData {
  userName: string;
  sort?: string;
  page?: number;
  order?: "asc" | "desc";
}

export interface IUserSearchResult {
  total_count: number;
  incomplete_results: boolean;
  items: User[];
}

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: `${hostDomain}` }),
  endpoints: (builder) => ({
    searchUser: builder.query<IUserSearchResult, IUserSearchData>({
      query: (value) => {
        const { userName, page, sort, order } = value;

        if (userName) {
          const request = `search/users?q=${userName}`;
          const sorted = sort ? `&sort=${sort}` : "";
          const orderBy = order ? `&order=${order}` : "";
          const numberOfPage = page ? `&page=${page}` : "";

          return `${request}${sorted}${orderBy}${numberOfPage}&per_page=8`;
        }

        return `search/users`;
      },
    }),
  }),
});

export const { useSearchUserQuery } = api;
