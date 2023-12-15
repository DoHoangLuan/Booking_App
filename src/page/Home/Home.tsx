import { MdFastfood } from "react-icons/md";
import { IoRestaurantOutline } from "react-icons/io5";
import { FaHotel } from "react-icons/fa6";
import { CiMicrophoneOn } from "react-icons/ci";
import MyLink from "../../Components/MyLink/MyLink";
import { Tooltip } from "@mui/material";
import MyButton from "../../Components/Button/Button";
const Home = () => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-2">
        <div className="h-[500px] w-[500px]">
          <div className="grid grid-rows-2 h-full">
            <div className="bg-yellow-400">Quảng Cáo</div>
            <div className="bg-orange-600">Quảng cáo</div>
          </div>
        </div>
        <div className="h-[500px] w-full">
          <div className="bg-red-600 h-full">Quảng cáo </div>
        </div>
      </div>
      <div className="mt-5">
        <div className="w-[1200px] h-[100px] border rounded bg-slate-50 m-auto  ">
          <div className="flex flex-row justify-around items-center leading-[100px]">
            <MyLink to="/delivery">
              <MyButton>
                <div className="flex flex-col justify-center items-center">
                  <div className="h-[50px] w-[50px] rounded-full bg-white flex items-center justify-center">
                    <MdFastfood className="text-[30px] text-red-500" />
                  </div>
                  <p>Giao đồ ăn</p>
                </div>
              </MyButton>
            </MyLink>
            <MyLink to="/booking">
              <MyButton>
                <div className="flex flex-col justify-center items-center">
                  <div className="h-[50px] w-[50px] rounded-full bg-white flex items-center justify-center">
                    <IoRestaurantOutline className="text-[30px] text-red-500" />
                  </div>
                  <p>Nhà hàng</p>
                </div>
              </MyButton>
            </MyLink>
            <MyLink to="#">
              <MyButton disabled>
                <div className="flex flex-col justify-center items-center">
                  <div className="h-[50px] w-[50px] rounded-full bg-white flex items-center justify-center relative">
                    <div className="absolute text-[10px] top-0 left-11 w-[100px] h-[15px] bg-red-400 border rounded ">
                      Coming soon
                    </div>
                    <FaHotel className="text-[30px] text-red-500" />
                  </div>
                  <p>Khách sạn</p>
                </div>
              </MyButton>
            </MyLink>
            <MyLink to="#">
              <MyButton disabled>
                <div className="flex flex-col justify-center items-center">
                  <div className="h-[50px] w-[50px] rounded-full bg-white flex items-center justify-center relative">
                    <div className="absolute text-[10px] top-0 left-11 w-[100px] h-[15px] bg-red-400 border rounded ">
                      Coming soon
                    </div>
                    <CiMicrophoneOn className="text-[30px] text-red-500" />
                  </div>
                  <p>Karaoke</p>
                </div>
              </MyButton>
            </MyLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
