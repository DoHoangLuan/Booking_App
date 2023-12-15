import {
  faInstagram,
  faFacebook,
  faTiktok,
  faApple,
  faAndroid,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="mx-auto bg-slate-900 px-[52px]">
      <div className="grid grid-cols-2 gap-4 h-[600px] py-[60px] ">
        <div className="space-y-5 w-[360px] h-full text-slate-200 ">
          <div className="overflow-visible inline-block  w-[200px] h-[92px]">
            <img
              src="../../../img/logo.png"
              alt="logo"
              className="object-cover  "
            />
          </div>
          <h5>
            <b>Công ty TNHH Jucid Brothers Việt Nam</b>
          </h5>
          <h5>
            <b>Mã số thuế Doanh nghiệp</b> :<b> 225863219</b>
          </h5>
          <h5>
            <b>
              Trụ sở chính: 11A-15-17 Nguyễn Cơ Thạch, Phường An Lợi Đông, Thành
              phố Thủ Đức, Thành phố Hồ Chí Minh, Việt Nam
            </b>
          </h5>
          <h5>
            <b>
              Trung tâm vận hành: 3-5 Đường số 7, Phường An Lợi Đông, Thành phố
              Thủ Đức, Thành phố Hồ Chí Minh, Việt Nam
            </b>
          </h5>
          <h5>
            <b>Số điện thoại: 1900 9999</b>
          </h5>
          <div className=" w-[143px] h-[43px] object-cover">
            <img src="../../../img/bocongthuong.png" />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2 h-full  text-slate-200">
          <ul className="space-y-4">
            <li className="mb-4 text-16">
              <b>Công ty</b>
            </li>
            <li>
              <NavLink to="/about-us">Về chúng tôi</NavLink>
            </li>
            <li>
              <NavLink to="/job">Việc làm</NavLink>
            </li>
            <li>
              <NavLink to="/service"> Dịch vụ</NavLink>
            </li>
            <li>
              <NavLink to="/contact"> Liên hệ</NavLink>
            </li>
          </ul>
          <ul className="space-y-4">
            <li className="mb-4 text-16">
              <b>Liên hệ</b>
            </li>
            <li className="whitespace-normal">
              corporate.finbank communties @vn.tphcm.com
            </li>
          </ul>
          <ul className="space-y-4">
            <li className="mb-4 text-16">
              <b>Các chính sách</b>
            </li>
            <li>Điều khoản sử dụng</li>
            <li>Chính sách bảo mật</li>
          </ul>
        </div>
      </div>
      <div className="text-cyan-50 h-[50px] w-full flex justify-between ">
        <ul className="flex flex-row gap-8  ">
          <li>
            <a target="_blank" href="https://www.facebook.com/dohoangluan26x8/">
              <FontAwesomeIcon
                icon={faFacebook}
                className=" w-[24px] h-[24px]"
              />
            </a>
          </li>
          <li>
            <a target="_blank" href="https://www.instagram.com/dhl_26x8/">
              <FontAwesomeIcon
                icon={faInstagram}
                className=" w-[24px] h-[24px]"
              />
            </a>
          </li>
          <li>
            <a target="_blank" href="https://www.tiktok.com/@dohoangluan0">
              <FontAwesomeIcon icon={faTiktok} className=" w-[24px] h-[24px]" />
            </a>
          </li>
        </ul>
        <div className="flex flex-row gap-6">
          <div>
            <a
              className="h-[35px] w-[300px] flex flex-row gap-3 rounded border px-3 justify-center items-center "
              target="_blank"
              href="https://apps.apple.com/vn/app/"
            >
              <FontAwesomeIcon icon={faApple} className="text-[25px]" />
              <h3 className="text-bold">Tải ứng dụng trên IOS</h3>
            </a>
          </div>
          <div>
            <a
              className="h-[35px] w-[300px] flex flex-row gap-3 rounded border px-3 justify-center items-center "
              target="_blank"
              href="https://play.google.com/store/apps/"
            >
              <FontAwesomeIcon icon={faAndroid} className="text-[25px]" />
              <h3 className="text-bold">Tải ứng dụng trên Android</h3>
            </a>
          </div>
        </div>
      </div>
      <div className="text-bold text-slate-50 mt-10">
        <p>© 2023 Jucid Brothers Vietnam</p>
      </div>
    </div>
  );
};
export default Footer;
