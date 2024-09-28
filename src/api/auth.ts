import {
  LoginRequestParams,
  MyPageResponse,
  SignupRequestParams,
} from "@/types/authType";

import { getID } from "@/utils/handleID";

import { instance } from "@/api/instance";

export const login = async ({
  user_login_id,
  user_login_password,
}: LoginRequestParams) => {
  const { data } = await instance.post("/login", {
    user_login_id,
    user_login_password,
  });

  return data;
};

export const register = async ({
  user_login_id,
  user_login_password,
  name,
}: SignupRequestParams) => {
  const { data } = await instance.post("/register", {
    user_login_id,
    user_login_password,
    name,
  });

  return data;
};

export const checkID = async (user_login_id: string) => {
  const { data } = await instance.get(`/checkIdDuplicate/${user_login_id}`);

  return data;
};

export const myPage = async () => {
  const userID = getID();

  const { data } = await instance.get<MyPageResponse>(`/mypage/${userID}`);
  return data;
};
