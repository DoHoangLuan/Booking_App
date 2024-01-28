import { axiosClient } from "./axiosClient";

export interface LoginDataType {
  email: string;
  password: string;
}

export const loginAPI = async (data: LoginDataType) => {
  const res = await axiosClient.post("/auth/register");
  return res;
};
