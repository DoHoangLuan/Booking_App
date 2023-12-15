import { NavLink } from "react-router-dom";
import BasicMenu from "../../Components/Profiles/Profile";
import { IoSettingsOutline, IoHelpCircleOutline } from "react-icons/io5";
import { MdOutlineFeedback } from "react-icons/md";
import { CiUser, CiShoppingCart } from "react-icons/ci";
import MyButton from "../../Components/Button/Button";
import Avatar from "@mui/material/Avatar";
import MyAvatar from "../../Components/Avatar/Avatar";

const Header = ({ handleClick }) => {
  const profileUser = [
    {
      icon: <CiUser />,
      title: "Đăng nhập",
      to: "/Login",
    },
    {
      icon: <IoHelpCircleOutline />,
      title: "Trợ giúp",
      to: "/Help",
    },
    {
      icon: <MdOutlineFeedback />,
      title: "Gửi ý kiến phản hồi",
      to: "/feedback",
    },
    {
      icon: <IoSettingsOutline />,
      title: "Cài đặt",
      to: "/Setting",
    },
    {
      icon: <IoSettingsOutline />,
      title: "Profile",
      to: "/profile",
    },
  ];

  return (
    <div>
      <div className="flex bg-slate-300 sticky justify-between ">
        <h3 className="text-white text-[30px] ml-10 leading-[66px] ">
          <NavLink to="/">JUICY</NavLink>
        </h3>
        <div>
          <ul className="flex flex-row items-center text-white gap-[30px] text-[15px] leading-[66px]">
            <li className="font-bold text-slate-800 ">
              <NavLink to="/about-us">Về chúng tôi</NavLink>
            </li>
            <li className="transition delay-300 ease-in-out hover:font-medium">
              <NavLink to="/job">Việc làm</NavLink>
            </li>
            <li className="transition delay-300 ease-in-out hover:font-medium">
              <NavLink to="/service"> Dịch vụ</NavLink>
            </li>
            <li className="transition delay-300 ease-in-out hover:font-medium">
              <NavLink to="/contact"> Liên hệ</NavLink>
            </li>
          </ul>
        </div>
        <div className="flex flex-row gap-5">
          <div className="flex justify-center relative">
            <MyButton onClick={handleClick}>
              <span>
                <CiShoppingCart className="text-cyan-400 text-[35px]" />
              </span>
              <div className="absolute h-[25px] w-[25px] rounded-full bg-red-500 top-[5px] right-0 ">
                <span className="leading-[25px]">0</span>
              </div>
            </MyButton>
          </div>
          <div className="flex justify-center ">
            <BasicMenu className="flex " profileUser={profileUser}>
              <div className="mr-10">
                <MyAvatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              </div>
            </BasicMenu>
          </div>
        </div>
        {/* <div className="mr-10">
          <ul className="flex flex-row items-center text-white gap-[30px] text-[15px] leading-[66px]">
            <li className="transition delay-300 ease-in-out hover:font-medium">
              <NavLink to="/login">Login</NavLink>
            </li>
            <li className="transition delay-300 ease-in-out hover:font-medium">
              <NavLink to="/register">Register</NavLink>
            </li>
          </ul>
        </div> */}
      </div>
    </div>
  );
};

export default Header;
