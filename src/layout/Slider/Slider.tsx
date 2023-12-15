import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "./slider.css";

import { Pagination } from "swiper/modules";
interface SliderProps {
  srcs: string[];
  className: string;
}

const Slider: React.FC<SliderProps> = ({ srcs, className }) => {
  const pagination = {
    clickable: true,
    renderBullet: function (index: any, className: any) {
      return '<span  class="' + className + '">' + "" + "</span>";
    },
  };

  return (
    <>
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper "
      >
        {srcs.map((src) => {
          return (
            <SwiperSlide>
              <img src={src} className={className} />
            </SwiperSlide>
            
          );
        })}
      </Swiper>
    </>
  );
};
export default Slider;
