export type LoginRequestParams = {
  user_login_id: string;
  user_login_password: string;
};

export type SignupRequestParams = LoginRequestParams & { name: string };

export type AuthResponse = {
  user_id: number;
  user_login_id: string;
  name: string;
};
