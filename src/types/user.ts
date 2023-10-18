export type User = {
  name: string;
  avatarUrl: string;
  email: string;
  token: string;
};

export type AuthData = {
  login: string | undefined;
  password: string | undefined;
};
