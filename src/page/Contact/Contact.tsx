import {
  Box,
  Checkbox,
  FormControlLabel,
  Stack,
  Typography,
} from "@mui/material";
import MyInput from "../../Components/Input/Input";
import { Link } from "react-router-dom";
import MyButton from "../../Components/Button/Button";
import { MdArrowOutward } from "react-icons/md";

const Contact = () => {
  return (
    <div>
      <div className="relative h-[528px]">
        <div
          className="h-full w-full bg-cover bg-no-repeat relative flex"
          style={{
            backgroundImage: `url(https://website-cdn.baemin.vn/assets/images/contact-us/background.png)`,
          }}
        >
          <div className="absolute left-0 right-0 bottom-0 top-0 text-center flex flex-col justify-center items-center text-white">
            <h1 className="uppercase text-[56px] font-bold">
              HÃY GIỮ LIÊN LẠC NHÉ !
            </h1>
            <p className="text-[24px] font-semibold">
              Liên hệ BAEMIN ngay khi bạn cần hỗ trợ{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="py-20">
        <div className="grid grid-cols-2 max-w-[1096px] mx-auto gap-x-16">
          <div className="flex flex-col gap-5 ">
            <h1 className="uppercase text-[48px]">Thông tin chung </h1>
            <div className="flex flex-col gap-1 text-[20px]">
              <h1 className="font-bold">Ông Song Jinwoo</h1>
              <p>Tổng Giám đốc</p>
              <p>jinwoo.song@vn.woowahan.com</p>
              <p className=" mt-[20px] border-[1px] border-b-slate-700"></p>
            </div>
            <div className="flex flex-col gap-1 text-[20px]">
              <h1 className="font-bold">Ông Nguyễn Đình Đăng Khoa</h1>
              <p>Giám đốc Thương hiệu & Truyền thông</p>
              <p>dangkhoa.nguyen@vn.woowahan.com</p>
              <p className=" mt-[20px] border-[1px] border-b-slate-700"></p>
            </div>
            <div className="flex flex-col gap-1 text-[20px]">
              <h1 className="font-bold">Bà Dương Ngọc Thuỷ Thương</h1>
              <p>Trưởng nhóm Truyền thông Doanh nghiệp</p>
              <p>thuong.duong@vn.woowahan.com</p>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <h1 className="uppercase text-[48px]">Văn phòng liên lạc </h1>
            <div className="flex flex-row text-[20px]">
              <div className="flex-[1] min-w-[200px] flex font-semibold text-[#24abb1]">
                <p>Trụ sở chính</p>
              </div>
              <div className="flex-[3]  flex">
                <p>
                  11A-15-17 Nguyễn Cơ Thạch, Phường An Lợi Đông, Thành phố Thủ
                  Đức, Thành phố Hồ Chí Minh, Việt Nam
                </p>
              </div>
            </div>
            <div className="flex flex-row text-[20px]">
              <div className="flex-[1] min-w-[200px] flex font-semibold text-[#24abb1]">
                <p>Trung tâm vận hành</p>
              </div>
              <div className="flex-[3] flex">
                <p>
                  11A-15-17 Nguyễn Cơ Thạch, Phường An Lợi Đông, Thành phố Thủ
                  Đức, Thành phố Hồ Chí Minh, Việt Nam
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative bg-[#f5f7fa]">
        <div>
          <div className="absolute w-[162px] top-8 left-0 overflow-hidden">
            <img
              className="h-full w-full object-cover"
              src="https://website-cdn.baemin.vn/assets/images/contact-us/be-1.png"
              alt=""
            />
          </div>
          <div className="absolute w-[162px] top-15 right-10 overflow-hidden">
            <img
              className="h-full w-full object-cover"
              src="https://website-cdn.baemin.vn/assets/images/contact-us/be-2.png"
              alt=""
            />
          </div>
        </div>
        <div className="mx-auto max-w-[1096px] px-6 py-[84px]">
          <h2 className="text-[48px] font-bold uppercase font-mono">
            Gửi tin nhắn cho BAEMIN
          </h2>
          <p>
            Những giá trị chung dẫn dắt cách chúng tôi làm việc và cho chúng tôi
            những màu sắc riêng, một màu không thể BAEMIN hơn.
          </p>
          <div>
            <form className=" py-5 mt-5 w-[600px]">
              <Stack spacing={5}>
                <MyInput
                  fullWidth
                  label="Your Name"
                  placeholder="Enter your name*"
                />
                <MyInput
                  fullWidth
                  label="Your Email"
                  placeholder="Enter your email*"
                />
                <MyInput
                  fullWidth
                  id="outlined-multiline-static"
                  multiline
                  rows={4}
                  placeholder="Enter your message*"
                />
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label={
                    <Box>
                      Tôi đồng ý cung cấp thông tin này cho BAEMIN và dữ liệu
                      của tôi sẽ được bảo vệ như đã được đưa ra ở&nbsp;
                      <Link className="underline text-[#24abb1]" to="">
                        Chính sách bảo mật
                      </Link>
                    </Box>
                  }
                />
                <MyButton
                  endIcon={<MdArrowOutward />}
                  sx={{
                    background: "#ebf0f5",
                    borderRadius: "10px",
                    color: "black",
                    "&:hover": {
                      background: "#24abb1",
                      color: "white",
                    },
                  }}
                  className="h-14 w-[160px] "
                >
                  Gửi tin nhắn
                </MyButton>
              </Stack>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
