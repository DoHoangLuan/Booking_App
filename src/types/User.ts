export interface User {
  _id: string;
  username: string;
  email: string;
  profilePicture: string;
  coverPicture: string;
  isAdmin: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface Auth {
  user: User;
  accessToken: string;
}
