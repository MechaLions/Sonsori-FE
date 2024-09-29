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

export type MyPageResponse = {
  name: string;
  quiz_correct_number: number;
  shadowing_accuracy_avg: number;
  shadowing_category_name: string;
  voice_accuracy_avg: number;
  voice_category_name: string;
};
