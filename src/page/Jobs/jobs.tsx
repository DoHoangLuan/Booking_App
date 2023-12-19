import BasicTabs from "../../Components/Tabs/Tabs";
import Slider from "../../layout/Slider/Slider";
import Woowa from "../TabMenu/Jobs/Woowa/Woowa";
import Commit from "../TabMenu/Us/Commit/Commit";
import OurPartner from "../TabMenu/Us/Partner/OurPartner";
const imgCareers = [
  "/public/img/BaeminCareers/baemincareers1.jpg",
  "/public/img/BaeminCareers/baemincareers2.jpg",
  "/public/img/BaeminCareers/baemincareers3.jpg",
  "/public/img/BaeminCareers/baemincareers4.jpg",
  "/public/img/BaeminCareers/baemincareers5.jpg",
  "/public/img/BaeminCareers/baemincareers6.jpg",
  "/public/img/BaeminCareers/baemincareers7.jpg",
  "/public/img/BaeminCareers/baemincareers8.jpg",
];
const menuTabsJobs = [
  {
    title: "Văn hoá Woowa",
    children: <Woowa />,
  },
  {
    title: "Cấu trúc doanh nghiệp",
    children: <OurPartner />,
  },
  {
    title: "Hành trình tuyển dụng",
    children: <Commit />,
  },
  {
    title: "Phúc lợi",
    children: <Commit />,
  },
  {
    title: "FAQ",
    children: <Commit />,
  },
];
const Job = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="relative">
        <Slider
          srcs={imgCareers}
          className="h-[528px] w-full object-cover z-10 "
        />
        <div className="absolute w-[700px] h-[200px] flex items-center justify-center top-0 left-0 bottom-0 right-0 m-auto text-center z-10">
          <div className=" text-white flex flex-col gap-5 select-none ">
            <h1 className="uppercase text-[56px] font-mono font-bold  ">
              Con người tại baemin{" "}
            </h1>
            <p className="text-[24px]">
              Nơi tập hợp những cá nhân bình thường cùng làm nên những kết quả
              phi thường{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center text-center py-[84px] px-40 mx-auto w-[1160px]">
        <p className="text-[18px]">
          Tại BAEMIN, chúng tôi được trao quyền để biến ý tưởng thành hiện thực
          và đóng góp trực tiếp vào những bước phát triển đột phá của công ty.
          Sự dí dỏm và sáng tạo tại BAEMIN không chỉ được thể hiện trong câu
          chuyện thương hiệu và các sản phẩm truyền thông tiếp thị của BAEMIN mà
          còn qua văn hoá làm việc của chúng tôi. Chúng tôi định nghĩa công ty
          là nơi những người bình thường cùng nhau tạo nên những điều phi
          thường.{""}
        </p>
      </div>
      <div>
        <BasicTabs menuTab={menuTabsJobs} />
      </div>
    </div>
  );
};

export default Job;
