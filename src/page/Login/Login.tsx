import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import Button from "../../Components/Button/Button";
import Input from "../../Components/Input/Input";
import {
  AuthLoginDataType,
  useLoginMutation,
} from "../../redux/auth/authService";
import { User } from "../../types/User";
import { ACCESS_TOKEN, CURRENT_USER } from "../../utils/constants";

const initialUser: User = {
  username: "",
  __v: 0,
  _id: "",
  coverPicture: "",
  createdAt: "",
  email: "",
  isAdmin: false,
  profilePicture: "",
  updatedAt: "",
};

const Login = () => {
  const [currentUser, setCurrentUser] = useState<User>();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [loginUserAPI, loginUserResult] = useLoginMutation();

  const navigate = useNavigate();

  useEffect(() => {
    const localData = localStorage.getItem(CURRENT_USER);

    if (localData) {
      const localUser = JSON.parse(localData) as User;
      setCurrentUser(localUser);
    }
  }, []);

  useEffect(() => {
    if (currentUser) {
      navigate("/");
    }
  }, [currentUser, navigate]);

  const handleSubmit = async () => {
    setIsLoading(true);
    const dataLogin: AuthLoginDataType = {
      email,
      password,
    };
    console.log({ dataLogin });

    try {
      const result = await loginUserAPI(dataLogin).unwrap();
      localStorage.setItem(ACCESS_TOKEN, result.data.accessToken);
      localStorage.setItem(CURRENT_USER, JSON.stringify(result?.data?.user));
      navigate("/");
    } catch (error) {
      //Toast
    }

    setIsLoading(false);
  };

  return (
    <div className="bg-white h-screen flex relative justify-center items-center">
      <h1 className="absolute top-[25px] font-bold tracking-widest m-auto">
        CHÀO MỪNG BẠN ĐẾN VỚI JUICY
      </h1>
      <div className="grid grid-cols-2 ">
        <div>
          <img
            className="h-[600px]"
            src="../../../img/BaeminLogin/shipper.jpg"
            alt="Baemin"
          />
        </div>
        <div>
          <div className="h-[450px] w-[400px] rounded border border-black mx-auto bg-blue-100">
            <header className="font-serif h-[80px] font-semibold tracking-[10px] text-red-500 leading-[80px] text-[30px] mt-8 ">
              <h1 className="text-center">JUICY</h1>
            </header>
            <form>
              <div className="flex flex-col gap-3  items-center">
                <Input
                  label="Email"
                  type="email"
                  name="email"
                  placeholder="Nhập email của bạn"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                  label="Password"
                  type="password"
                  name="Password"
                  placeholder="Nhập mật khẩu của bạn "
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Button
                  variant="outlined"
                  size="medium"
                  title="Đăng nhập"
                  className="w-[300px]"
                  disabled={isLoading}
                  onClick={handleSubmit}
                />
              </div>
            </form>
          </div>
          <div className="h-[120px] w-[400px] rounded border border-black mx-auto bg-blue-100 mt-[30px] flex justify-center items-center gap-2">
            <div className="flex gap-2">
              <p>Bạn chưa có tài khoản ư?</p>
              <p className="text-blue-400 ">
                <NavLink to="/register">Đăng ký</NavLink>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
