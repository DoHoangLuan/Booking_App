import { Button } from "@mui/material";
import Slider from "../../layout/Slider/Slider";
import BasicTabs from "../../Components/Tabs/Tabs";
import Login from "../Login/Login";
import MyStoryLabelStepper from "../TabMenu/Us/MyStory/MyStory";
import OurPartner from "../TabMenu/Us/Partner/OurPartner";
import Commit from "../TabMenu/Us/Commit/Commit";

const AboutUs = () => {
  const urls = [
    "/img/BaeminSlide/baemin5.jpg",
    "/img/BaeminSlide/baemin4.jpg",
    "/img/BaeminSlide/baemin3.jpg",
    "/img/BaeminSlide/baemin2.jpg",
    "/img/BaeminSlide/baemin1.png",
  ];
  const MenuTabsUs = [
    {
      title: "Câu chuyện của chúng tôi",
      children: <MyStoryLabelStepper />,
    },
    {
      title: "Tầm nhìn, tuyên bố & đối tác",
      children: <OurPartner />,
    },
    {
      title: "Cam kết của chúng tôi",
      children: <Commit />,
    },
  ];

  return (
    <div >
      <div className="relative mb-[50px] select-none">
        <Slider className="w-full object-cover h-[775px]" srcs={urls} />
        <div className="absolute w-[1000px] h-[200px] top-0 left-0 bottom-0 right-0 m-auto z-10 flex flex-col justify-center items-center select-none">
          <div>
            <h1 className="text-[48px] text-white uppercase">
              GIAO TRỌN HẠNH PHÚC ĐẾN TẬN TAY BẠN{" "}
            </h1>
          </div>
          <div className=" m-auto ">
            <p className="text-white text-[24px] m-auto font-bold text-center">
              Nếu bạn bắt gặp màu xanh mint quen thuộc trên đường phố, đó chính
              là JUICY chúng tôi, ngày qua ngày khác giao niềm vui hạnh phúc đến
              ngay tận tay bạn
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center m-auto w-[872px] py-[70px]">
        <div className="mb-[50px]">
          <h1 className="uppercase text-[48px] font-bold">Tổng quan</h1>
        </div>
        <div className="gap-[30px] ">
          <div className="h-[96px] text-center font-thin text-[20px] mb-[20px]">
            JUICY là ứng dụng giao đồ ăn trực tuyến được vận hành bởi Juicy
            Brothers Việt Nam, thành viên của liên doanh giữa Juicy Brothers –
            công ty giao đồ ăn số 1 tại Việt Nam và Express Thunder – tập đoàn
            công nghệ giao đồ ăn hàng đầu thế giới, cung cấp dịch vụ và giao
            hàng tại hơn 50 quốc gia khác nhau.
          </div>
          <div className="h-[76px] text-center font-thin text-[20px]">
            Nếu bạn bắt gặp gam màu xanh mint quen thuộc trên đường phố, đó
            chính là BAEMIN chúng tôi, ngày này qua ngày khác giao niềm hạnh
            phúc đến ngay trước cửa nhà bạn.
          </div>
        </div>
      </div>
      <div >
        {/* <div className="sticky z-30 border-b-[1px] border-black/10 bg-white py-[16px] ">
          <div>
            <ul className="flex flex-row justify-center">
              <li>
                <Button variant="none" >Câu chuyện của tôi</Button>
              </li>
              <li>
                <Button variant="none">Tầm nhìn, tuyên bố & đối tác</Button>
              </li>
              <li>
                <Button variant="none">Cam chuyện của chúng tôi</Button>
              </li>
            </ul>
          </div>
        </div> */}
        <BasicTabs menuTab={MenuTabsUs} />
      </div>
    </div>
  );
};

export default AboutUs;
