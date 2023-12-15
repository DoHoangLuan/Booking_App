const OurPartner = () => {
  return (
    <div className="pt-12 ">
      <div className="flex flex-col gap-14">
        <div className="h-[80px] w-2/4 m-auto">
          <p className="text-center text-[16px] font-semibold">
            Chúng tôi nỗ lực để trở thành công ty công nghệ ẩm thực và đời sống
            hàng đầu, nuôi dưỡng và kiến tạo hệ sinh thái riêng bao gồm các tài
            xế, nhà hàng, cửa hàng và các đối tác khác.
          </p>
        </div>
        <div className="w-full">
          <img
            src="/public/img/BaeminPartner/baeminpartner1.png"
            alt="Partner1"
            className="h-[560px] w-full object-cover object-centerer"
          />
        </div>
        <div className="grid grid-cols-2 mt-[20px] ">
          <div className="flex justify-center  text-5xl font-mono font-bold">
            Tầm nhìn
          </div>
          <div className="flex justify-start w-[400px]">
            <p className="font-semibold text-[24px] text-cyan-400">
              Giúp mọi người sống cuộc sống hạnh phúc và tiện lợi hơn thông qua
              ứng dụng BAEMIN.
            </p>
          </div>
        </div>
        <div className="mt-[20px]">
          <img
            src="/public/img/BaeminPartner/baeminpartner2.png"
            alt="Partner2"
            className="h-[560px] w-full object-cover object-centerer"
          />
        </div>
        <div className="grid grid-cols-2 mt-[20px] ">
          <div className="flex justify-center  text-5xl font-mono font-bold">
            Tuyên bố
          </div>
          <div className="flex justify-start w-[400px]">
            <p className="font-semibold text-[24px] text-cyan-400">
              Chúng tôi là công ty công nghệ thực phẩm hàng đầu Việt Nam, chúng
              tôi kiến tạo và nuôi dưỡng hệ sinh thái ẩm thực với đội ngũ nhân
              viên xuất sắc, tự tin và tự chủ.
            </p>
          </div>
        </div>
        <div className="bg-black px-28 py-28 ">
          <div className="flex flex-row gap-10 ">
            <div className="flex flex-1 items-start">
              <img
                src="/public/img/BaeminPartner/baeminpartner3.png"
                alt="Partner3"
                className=" h-[460px] w-full object-cover object-centerer"
              />
            </div>
            <div className="flex flex-1 items-center translate-y-[17%]">
              <img
                src="/public/img/BaeminPartner/baeminpartner6.png"
                alt="Partner6"
                className="h-[300px] w-full object-cover object-centerer"
              />
            </div>
            <div className="flex flex-1 items-end translate-y-[21%]">
              <img
                src="/public/img/BaeminPartner/baeminpartner4.png"
                alt="Partner4"
                className="  overflow-hidden h-[400px]  object-cover object-centerer"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-10 px-20 mt-24">
            <div>
              <img
                src="/public/img/BaeminPartner/baeminpartner5.png"
                alt="Partner5"
                className=" h-[360px] object-cover object-centerer"
              />
            </div>
            <div className="flex flex-col gap-6 translate-y-[21%]">
              <h1 className="text-white font-bold font-mono text-start text-[40px]">
                Đối tác
              </h1>
              <p className="text-cyan-400 font-bold font-mono text-start text-[20px]">
                Các đối tác tài xế và đối tác nhà hàng của BAEMIN không chỉ là
                đại sứ thương hiệu của chúng tôi, những người mang lại trải
                nghiệm tuyệt vời cho khách hàng mà còn đóng vai trò quan trọng
                trong việc thể hiện sự độc đáo của thương hiệu: bất cứ điều gì
                chúng tôi làm, chúng tôi đều làm với niềm đam mê!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OurPartner;
