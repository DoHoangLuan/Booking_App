import Slider from "../../../../layout/Slider/Slider";

const Commit = () => {
  const imgArr = [
    "/img/BaeminComit/baemincomit1.jpg",
    "/img/BaeminComit/baemincomit2.jpg",
    "/img/BaeminComit/baemincomit3.jpg",
    "/img/BaeminComit/baemincomit4.jpg",
    "/img/BaeminComit/baemincomit5.jpg",
  ];
  const imgArr2 = [
    "/img/BaeminComit/baemoncomit6.jpg",
    "/img/BaeminComit/baemincomit7.jpg",
    "/img/BaeminComit/baemincomit8.jpg",
    "/img/BaeminComit/baemincomit9.jpg",
    "/img/BaeminComit/baemincomit10.jpg",
  ];
  const imgArr3 = [
    "/img/BaeminComit/baemincomit11.jpg",
    "/img/BaeminComit/baemincomit12.jpg",
    "/img/BaeminComit/baemincomit13.jpg",
    "/img/BaeminComit/baemincomit14.jpg",
    "/img/BaeminComit/baemincomit15.jpg",
    "/img/BaeminComit/baemincomit16.jpg",
  ];
  return (
    <div className="flex flex-col justify-center gap-10 px-80 ">
      <div className="mt-[40px] py-10">
        <p className="text-center text-[18px]">
          Không chỉ là một công ty công nghệ, BAEMIN còn chú trọng vào các
          nguyên tắc cộng đồng và luôn cam kết ưu tiên phát triển bền vững.
        </p>
      </div>
      <div>
        <Slider
          className=" w-full h-[500px] object-cover"
          srcs={imgArr}
        ></Slider>
      </div>
      <div className="grid grid-cols-2 justify-items-center">
        <div className="flex flex-row  text-right  ">
          <h4 className="font-bold font-mono text-[24px] w-[190px]">
            Đối với các<br></br> Đối tác tài xế
          </h4>
        </div>
        <div className="flex flex-col gap-4 text-[16px] font-sans">
          <div>
            <p>
              <b>Chúng tôi nghiêm túc tuyển dụng và đào tạo tài xế: </b> Với quy
              trình tuyển dụng cẩn thận, kiểm soát chặt chẽ chất lượng đào tạo,
              chúng tôi cam kết xây dựng một cộng đồng tài xế gắn kết, tạo ra
              một lực lượng lao động gồm những tài xế thân thiện, năng động và
              chuyên nghiệp nhất trên các nền tảng.
            </p>
          </div>
          <div>
            <p>
              <b>
                Chúng tôi luôn quan tâm, hỗ trợ tài xế và cung cấp cho họ sự
                linh hoạt khi làm việc:{" "}
              </b>
              Chúng tôi coi trọng sức khỏe vật chất và tinh thần của các tài xế
              bằng cách kiểm tra sức khỏe thường xuyên, đồng thời liên tục phát
              triển và gắn kết cộng đồng tài xế với các sáng kiến ​​tương tác
              hấp dẫn.
            </p>
          </div>
          <div>
            <p>
              <b>Chúng tôi đảm bảo mọi tài xế đều được trả công xứng đáng: </b>
              Chúng tôi áp dụng các chuẩn mực đạo đức kinh doanh để đảm bảo rằng
              công việc của đối tác tài xế mang lại thu nhập phù hợp cho tất cả
              đối tác trên toàn quốc. Tài xế của chúng tôi được khuyến khích
              giao hàng vào giờ cao điểm cũng như nhận đơn hàng từ các nơi có
              khoảng cách ngắn để đảm bảo rằng chúng tôi có thể cung cấp dịch vụ
              giao hàng tốt nhất.
            </p>
          </div>
          <div>
            <p>
              <b>
                Trong những giai đoạn khó khăn (như dịch bệnh Covid-19), chúng
                tôi đã triển khai biện pháp bảo vệ an toàn và hỗ trợ tài chính
                cho đối tác tài xế:{" "}
              </b>
              Là một ngành phát triển mạnh trong thời kỳ đại dịch, việc đảm bảo
              sức khỏe các đối tác tài xế càng trở nên quan trọng hơn. Bên cạnh
              các biện pháp bảo vệ an toàn, chúng tôi cũng cung cấp các giải
              pháp hỗ trợ tài chính thông qua quỹ tài chính.
            </p>
          </div>
        </div>
      </div>
      <div>
        <Slider
          className=" w-full h-[500px] object-cover"
          srcs={imgArr2}
        ></Slider>
      </div>
      <div className="grid grid-cols-2 justify-items-center">
        <div className="flex flex-row  text-right  ">
          <h4 className="font-bold font-mono text-[24px] w-[220px]">
            Đối với các<br></br> Đối tác nhà hàng
          </h4>
        </div>
        <div className="flex flex-col gap-4 text-[16px] font-sans">
          <div>
            <p>
              <b>
                Chúng tôi cung cấp một kênh hỗ trợ bán hàng thuận tiện, nhanh
                chóng và tạo ra lợi nhuận cho các đối tác nhà hàng:{" "}
              </b>
              Chuyên môn về vận hành là tài sản mà chúng tôi cung cấp cho các
              đối tác nhà hàng của mình. Bằng cách tận dụng công nghệ, chúng tôi
              có thể tối ưu hóa cơ sở hạ tầng và hiệu quả hoạt động. Điều này
              giúp gia tăng số lượng đơn hàng và góp phần vào sự thành công
              trong kinh doanh của các đối tác nhà hàng.
            </p>
          </div>
          <div>
            <p>
              <b>
                Chúng tôi đồng hành cùng đối tác nhà hàng trong hành trình phát
                triển của họ:{" "}
              </b>
              Chúng tôi cung cấp một loạt các dịch vụ hỗ trợ để giúp các nhà
              hàng phát triển và tăng trưởng khi tham gia BAEMIN, bao gồm giúp
              chụp ảnh món ăn miễn phí và tăng cường nhận diện quán xá để thu
              hút khách hàng mới.
            </p>
          </div>
          <div>
            <p>
              <b>
                Chúng tôi cam kết nâng tầm đối tác nhà hàng thông qua Học viện
                BAEMIN:{" "}
              </b>
              Chúng tôi đã giới thiệu Học viện BAEMIN, nơi các đối tác nhà hàng
              được trang bị kiến thức và kỹ năng cần thiết trong công việc và
              cuộc sống từ đó giúp họ tăng trưởng, phát triển bền vững và có
              cuộc sống tốt đẹp hơn.
            </p>
          </div>
        </div>
      </div>
      <div>
        <Slider
          className=" w-full h-[500px] object-cover"
          srcs={imgArr3}
        ></Slider>
      </div>
      <div className="grid grid-cols-2 justify-items-center">
        <div className="flex flex-row  text-right  ">
          <h4 className="font-bold font-mono text-[24px] w-[220px]">
            Đối với<br></br> cộng đồng
          </h4>
        </div>
        <div className="flex flex-col gap-4 text-[16px] font-sans">
          <div>
            <p>
              <b>
                Dịch vụ của chúng tôi giúp đáp ứng các nhu cầu thiết yếu hàng
                ngày:{" "}
              </b>
              Chúng tôi cam kết hỗ trợ cộng đồng địa phương và cung cấp hàng hóa
              thiết yếu cho những người có nhu cầu. Chúng tôi đã phối hợp với
              chính quyền địa phương trong thời gian thành phố giãn cách để cung
              cấp thực phẩm và hàng tiêu dùng thiết yếu cho cộng đồng và những
              nhóm yếu thế.
            </p>
          </div>
          <div>
            <p>
              <b>
                Chúng tôi tạo việc làm và hỗ trợ các hộ kinh doanh địa phương:{" "}
              </b>
              Là một doanh nghiệp hoạt động trên toàn quốc, chúng tôi xem đây là
              một lợi thế để hỗ trợ các cộng đồng địa phương thông qua cải tiến
              công nghệ và sự kết nối. Bằng cách tạo việc làm, chúng tôi hỗ trợ
              các cộng đồng địa phương và đóng góp vào tăng trưởng kinh tế.
            </p>
          </div>
          <div>
            <p>
              <b>Chúng tôi hướng tới sự phát triển bền vững: </b>
              Chúng tôi chú tâm đến những tác động mà doanh nghiệp để lại cho
              môi trường và đang nỗ lực để bảo vệ môi trường, thúc đẩy sự phát
              triển bền vững. Nỗ lực ban đầu của chúng tôi bắt đầu từ sáng kiến
              ​​toàn cầu - Dấu chân Carbon, khi chúng tôi đo lường lượng khí
              thải phát sinh từ các hoạt động vận hành và bù đắp thông qua các
              chương trình bảo vệ môi trường.
            </p>
          </div>
          <div>
            <p>
              <b>
                Chúng tôi hướng tới hệ sinh thái bền vững thông qua các hợp tác
                chiến lược:{" "}
              </b>
              Chúng tôi đang tận tâm thực hiện ngày càng nhiều các sáng kiến
              chiến lược với sự hợp tác của các bên liên quan như chính quyền
              địa phương để mang lại những tác động lâu dài cho cộng đồng, đối
              tác và môi trường.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Commit;
