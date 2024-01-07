import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ResponseAPI } from "../../types/ResponseAPI";
import { Auth } from "../../types/User";

export interface AuthLoginDataType {
  email: string;
  password: string;
}

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/api/v1/auth" }),
  endpoints: (build) => ({
    login: build.mutation<ResponseAPI<Auth>, AuthLoginDataType>({
      query(body) {
        return {
          url: "/login",
          method: "POST",
          body,
        };
      },
    }),
  }),
});

export const { useLoginMutation } = authApi;
