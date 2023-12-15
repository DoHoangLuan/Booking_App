import { NavLink } from "react-router-dom";
import Button from "../../Components/Button/Button";
import Input from "../../Components/Input/Input";

const Login = () => {
  return (
    <div className="bg-white h-screen flex relative justify-center items-center">
      <h1 className="absolute top-[25px] font-bold tracking-widest m-auto">
        CHÀO MỪNG BẠN ĐẾN VỚI JUICY{" "}
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
          <div className="h-[450px] w-[400px] rounded border border-black mx-auto bg-blue-100  ">
            <header className="font-serif h-[80px] font-semibold tracking-[10px] text-red-500 leading-[80px] text-[30px] mt-8 ">
              <h1 className="text-center">JUICY</h1>
            </header>
            <form>
              <div className="flex flex-col gap-3  items-center">
                <Input
                  labelName="Email"
                  type="email"
                  name="email"
                  placeholder="Nhập email của bạn"
                />
                <Input
                  labelName="Password"
                  type="password"
                  name="Password"
                  placeholder="Nhập mật khẩu của bạn "
                />
                <Button
                  variant="outlined"
                  size="medium"
                  title="Đăng nhập"
                  className="w-[300px]"
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
