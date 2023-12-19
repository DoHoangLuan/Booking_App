import "./woowa.css";
const Woowa = () => {
  return (
    <div className="pb-32">
      <div className="flex flex-col justify-center items-center px-80  ">
        <div className="flex flex-col justify-center items-center">
          <h1 className="font-bold font-mono text-[36px] pt-[80px]">
            Văn hoá Woowa
          </h1>
          <p className="font-thin font-sans text-[16px] text-center mt-6">
            Chúng tôi tin vào sức mạnh của văn hoá doanh nghiệp. Tại BAEMIN,
            chúng tôi sống và làm việc dựa trên các giá trị CREDO - “kim chỉ
            nam” truyền cảm hứng và thúc đẩy tập thể BAEMIN đi đến thành công.
          </p>
        </div>
        <div className="mt-16 py-10 ">
          <div className="flex flex-row gap-7 ml-10 justify-center items-center w-[512px]">
            <div className="w-[240px]">
              <div className="relative flex w-full bg-[#3ac5c9] rounded-full pb-[100%] ">
                <div className="absolute w-[180px] top-0 left-0 translate-x-[-20%] translate-y-[-25%]  ">
                  <img
                    className="w-full h-full object-cover"
                    src="https://website-cdn.baemin.vn/assets/images/sticker/be-flag.png"
                  />
                </div>
              </div>
            </div>
            <div>
              <p className="text-[#24abb1] italic">
                CREDO là tập hợp những giá trị, nguyên tắc và niềm tin làm kim
                chỉ nam cho mọi hành động của các BAEMINists.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center bg-[#3ac5c9] px-16 py-10">
        <div className="text-[32px] font-mono font-bold text-white">
          <p>Giá trị trọng tâm</p>
        </div>
        <div className="grid grid-cols-4 gap-10 px-[24px] py-[48px]">
          <div
            className={`Card flex flex-col w-[230px] hover:bg-white hover:text-black ease-in-out duration-500   gap-6 text-white justify-start items-center px-[16px] py-[24px] `}
          >
            <div className="h-[232px] ">
              <img
                src="https://website-cdn.baemin.vn/assets/images/sticker/be-raise-left-hand.png"
                className="h-full w-full object-cover"
              />
            </div>
            <h1 className="text-center font-bold font-mono ">
              Tự chủ trên nền tảng của Kỷ Luật
            </h1>
            <p className="text-center">
              Chúng ta hướng đến văn hóa Tự chủ trong Kỷ luật.
            </p>
          </div>
          <div
            className={`Card flex flex-col w-[230px] hover:bg-white hover:text-black ease-in-out duration-500  gap-6 text-white justify-start items-center px-[16px] py-[24px] `}
          >
            <div className="h-[232px]">
              <img
                src="https://website-cdn.baemin.vn/assets/images/sticker/be-riding.png"
                className="h-full w-full object-cover"
              />
            </div>
            <h1 className="text-center font-bold font-mono ">
              So với một ngôi sao, chúng ta cần Teamwork
            </h1>
            <p className="text-center">
              Công ty là nơi những người bình thường cùng nhau tạo nên những
              điều phi thường! Chúng ta hướng đến một tổ chức mà ở đó, những
              thành quả được tạo nên bằng teamwork chứ không chỉ dựa vào một
              thiên tài duy nhất.
            </p>
          </div>
          <div
            className={`Card flex flex-col w-[230px] hover:bg-white hover:text-black ease-in-out duration-500  gap-6 text-white justify-start items-center px-[16px] py-[24px] `}
          >
            <div className="h-[232px]">
              <img
                src="https://website-cdn.baemin.vn/assets/images/sticker/be-riding.png"
                className="h-full w-full object-cover"
              />
            </div>
            <h1 className="text-center font-bold font-mono ">
              Nghiêm túc và dí dỏm
            </h1>
            <p className="text-center">
              Chúng ta sẽ giải quyết các vấn đề một cách dễ dàng, rõ ràng và dí
              dỏm, nhưng vẫn không làm mất đi sự nghiêm túc trong công việc.{" "}
            </p>
          </div>
          <div
            className={`Card flex flex-col w-[230px] hover:bg-white hover:text-black ease-in-out duration-500  gap-6 text-white justify-start items-center px-[16px] py-[24px] `}
          >
            <div className="h-[232px]">
              <img
                src="https://website-cdn.baemin.vn/assets/images/sticker/be-crossed-arms.png"
                className="h-full w-full object-cover"
              />
            </div>
            <h1 className="text-center font-bold font-mono ">
              Chăm chỉ đi với Thành quả
            </h1>
            <p className="text-center">
              Làm việc bằng sự Chăm chỉ rất quan trọng. Tuy nhiên, việc tạo ra
              Thành quả càng quan trọng hơn. Giữa Quá trình và Kết quả, chúng ta
              không thể ưu tiên bên nào hơn hay chỉ chọn 1 trong 2 khi thực hiện
              công việc.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-10 justify-center items-center px-[330px]  ">
        <div className="py-[80px] font-bold font-mono text-[32px]">
          <p>Hình mẫu nhân tài của Woowa</p>
        </div>
        <div className="grid grid-rows-4 gap-5   ">
          <div className="flex flex-row gap-5 py-10 px-10 h-[304px] duration-300 hover:bg-slate-200 ">
            <div className="h-[200px] w-[180px] translate-y-[10%] ">
              <img
                src="https://website-cdn.baemin.vn/assets/images/sticker/be-slippy.png"
                className="h-full w-full object-cover self-center "
              />
            </div>
            <div className="flex flex-col gap-5 flex-[2]">
              <p className="text-[#3ac5c9] font-semibold text-[18px]">
                Cần cù và Thành thật
              </p>
              <p>
                Tại Woowa Brothers Việt Nam, một nhân tài luôn nỗ lực để tạo nên
                giá trị cho bản thân và cho công ty bằng sự tận tâm với công
                việc được giao, với một tư thế luôn Cần cù (chăm chỉ, luôn cố
                gắng) và Thành thật (chân thành, đúng đắn), đồng thời thực hành
                các giá trị cá nhân và doanh nghiệp trong mọi việc chúng tôi
                làm. Chúng tôi luôn ghi nhớ rằng cần cù và chính trực là nền
                tảng của mọi thứ. Chúng tôi tin vào sự thật rằng chú rùa chậm
                chạp nhưng kiên định luôn hoàn thành nhiệm vụ của mình, dù có ai
                theo dõi hay không, cuối cùng sẽ đánh bại chú thỏ nhanh nhẹn
                nhưng xảo quyệt và lười biếng.
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-5 py-10 px-10 h-[304px] duration-300 hover:bg-slate-200 ">
            <div className="h-[200px] w-[180px] translate-y-[10%] ">
              <img
                src="https://website-cdn.baemin.vn/assets/images/sticker/be-smile-standing.png"
                className="h-full w-full object-cover self-center "
              />
            </div>
            <div className="flex flex-col gap-5 flex-[2]">
              <p className="text-[#3ac5c9] font-semibold text-[18px]">
                Người làm công trong thời đại mới
              </p>
              <p>
                Một nhân tài thông thạo những kỹ thuật mới và nhạy bén trước
                dòng chảy của thời đại, luôn nghiên cứu về những thay đổi trong
                xu hướng và thị hiếu khách hàng.Nhân viên BAEMIN biết rằng mình
                đang làm việc trong một môi trường không ngừng thay đổi. Trong
                đó, khách hàng là trọng tâm. Để luôn tạo ra nguồn khách hàng mới
                và làm hài lòng khách hàng, chúng tôi không chần chừ trước sự
                thay đổi của thời đại mà phải biết chủ động trau dồi, không để
                bản thân bị lạc hậu với kỹ thuật và kiến thức mới.
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-5 py-10 px-10 h-[304px] duration-300 hover:bg-slate-200 ">
            <div className="h-[200px] w-[180px] translate-y-[10%] ">
              <img
                src="https://website-cdn.baemin.vn/assets/images/sticker/be-setting-jean.png"
                className="h-full w-full object-cover self-center "
              />
            </div>
            <div className="flex flex-col gap-5 flex-[2]">
              <p className="text-[#3ac5c9] font-semibold text-[18px]">
                Người làm công trong thời đại mới
              </p>
              <p>
                Một nhân tài thông thạo những kỹ thuật mới và nhạy bén trước
                dòng chảy của thời đại, luôn nghiên cứu về những thay đổi trong
                xu hướng và thị hiếu khách hàng.Nhân viên BAEMIN biết rằng mình
                đang làm việc trong một môi trường không ngừng thay đổi. Trong
                đó, khách hàng là trọng tâm. Để luôn tạo ra nguồn khách hàng mới
                và làm hài lòng khách hàng, chúng tôi không chần chừ trước sự
                thay đổi của thời đại mà phải biết chủ động trau dồi, không để
                bản thân bị lạc hậu với kỹ thuật và kiến thức mới.
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-5 py-10 px-10 h-[304px] duration-300 hover:bg-slate-200 ">
            <div className="h-[200px] w-[180px] translate-y-[10%] ">
              <img
                src="https://website-cdn.baemin.vn/assets/images/sticker/be-two-people.png  "
                className="h-full w-[110px] ml-3 object-cover overflow-visible  "
              />
            </div>
            <div className="flex flex-col gap-5 flex-[2]">
              <p className="text-[#3ac5c9] font-semibold text-[18px]">
                Người làm công trong thời đại mới
              </p>
              <p>
                Một nhân tài thông thạo những kỹ thuật mới và nhạy bén trước
                dòng chảy của thời đại, luôn nghiên cứu về những thay đổi trong
                xu hướng và thị hiếu khách hàng.Nhân viên BAEMIN biết rằng mình
                đang làm việc trong một môi trường không ngừng thay đổi. Trong
                đó, khách hàng là trọng tâm. Để luôn tạo ra nguồn khách hàng mới
                và làm hài lòng khách hàng, chúng tôi không chần chừ trước sự
                thay đổi của thời đại mà phải biết chủ động trau dồi, không để
                bản thân bị lạc hậu với kỹ thuật và kiến thức mới.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="px-6 pt-[72px] flex flex-col justify-center items-center">
        <div className="w-[1000px] py-14 ">
          <div className="text-center text-[30px] pt-5 mb-6 font-mono font-semibold ">
            <h1>11 điều để làm việc hiệu quả tại Woowa</h1>
          </div>
          <div className="text-center pt-10 ">
            <p>
              Chúng tôi đối xử với nhau dựa trên sự quan tâm và hợp tác để xây
              dựng một văn hoá tổ chức lành mạnh, nhưng đồng thời, chúng tôi
              cũng hiểu rõ trách nhiệm của mình trong việc thu hút và làm hài
              lòng khách hàng.
            </p>
          </div>
        </div>
        <div className="py-6">
          <div className="grid grid-cols-4 gap-5 ">
            <div>
              <div className="bg-[#3ac5c9] ">
                <div className="px-[48px] py-[48px] ">
                  <div className="w-[191px] flex flex-col gap-10 text-white transition duration-500 hover:scale-110">
                    <h2 className="text-5xl">01</h2>
                    <b>9h01, không phải 9h.</b>
                    <p>
                      Chúng tôi cùng nhau tạo dựng văn hoá Tự chủ trên nền tảng
                      Kỷ luật, phải cố gắng giữ đúng dù chỉ là một lời hứa nhỏ.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className="px-[48px] py-[48px] ">
                  <div className="w-[191px] flex flex-col gap-10 text-black  transition duration-500 hover:scale-110">
                    <h2 className="text-5xl text-[#3ac5c9]">05</h2>
                    <b>Không nói đùa gây khó chịu khi đồng nghiệp nghỉ phép.</b>
                    <p>
                      Một câu nói đùa không suy nghĩ cũng làm ảnh hưởng lớn đến
                      tinh thần làm việc của đồng nghiệp xung quanh.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className="bg-[#3ac5c9] ">
                  <div className="px-[48px] py-[48px] ">
                    <div className="w-[191px] flex flex-col gap-10 text-white transition duration-500 hover:scale-110">
                      <h2 className="text-5xl">O9</h2>
                      <b>Không làm những việc khiến người thân phải xấu hổ.</b>
                      <p>
                        Mỗi nhân viên - trước khi trở thành thành viên của công
                        ty - là những công dân trưởng thành tuân thủ pháp luật
                        và xem trọng những giá trị đạo đức.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="px-[48px] py-[48px] ">
                <div className="w-[191px] flex flex-col gap-10 text-black  transition duration-500 hover:scale-110">
                  <h2 className="text-5xl text-[#3ac5c9]">02</h2>
                  <b>Cấp bậc trong công việc! Bình đẳng trong văn hoá!.</b>
                  <p>
                    Giữa Cấp bậc và Bình đẳng - nếu chỉ nghiêng hẳn về một bên,
                    dù là bên nào cũng đều là điều không tốt. Khi làm việc, để
                    đạt được mục tiêu chung thì tất cả nhân viên phải cùng nhau
                    làm việc một cách có trật tự và theo nguyên tắc của tổ chức.
                  </p>
                </div>
              </div>
              <div>
                <div className="bg-[#3ac5c9] ">
                  <div className="px-[48px] py-[48px] ">
                    <div className="w-[191px] flex flex-col gap-10 text-white transition duration-500 hover:scale-110">
                      <h2 className="text-5xl">06</h2>
                      <b>Báo cáo phải dựa trên sự thật.</b>
                      <p>
                        Chỉ những thông tin dựa trên sự thật mới là nền tảng của
                        quyết định đúng đắn. Để không gây định kiến cho người
                        nhận báo cáo, trước tiên phải báo cáo dựa trên sự thật,
                        sau đó mới phân rõ và thêm vào ý kiến, quan điểm của cá
                        nhân.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="px-[48px] py-[48px] ">
                  <div className="w-[191px] flex flex-col gap-10 text-black  transition duration-500 hover:scale-110">
                    <h2 className="text-5xl text-[#3ac5c9]">10</h2>
                    <b>
                      Đích cuối cùng của tất cả mọi công việc là “Tạo ra khách
                      hàng" và “Sự hài lòng của khách hàng"
                    </b>
                    <p>
                      Công ty không thể tồn tại mà không có khách hàng. Điểm
                      khác nhau lớn nhất để phân biệt giữa một công ty và một
                      trường học, một bệnh viện, một tổ chức tôn giáo hay quân
                      đội…đó chính là “khách hàng". Tất cả mọi quyết định được
                      đưa ra ở công ty đều phải lấy việc tiếp cận khách hàng làm
                      trọng tâm. Quyết định một công việc nhưng lại loại bỏ
                      khách hàng, chỉ nghĩ đến sự thỏa hiệp về quyền lực hay
                      quyền lợi giữa các bộ phận trong công ty là một hành vi
                      ngu ngốc.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div>
                <div className="bg-[#3ac5c9] ">
                  <div className="px-[48px] py-[48px] ">
                    <div className="w-[191px] flex flex-col gap-10 text-white transition duration-500 hover:scale-110">
                      <h2 className="text-5xl">03</h2>
                      <b>
                        Tán gẫu trong công ty cũng là một năng lực cạnh tranh.
                      </b>
                      <p>
                        Tán gẫu là một trong những chất liệu để tạo nên sự tin
                        tưởng. Những câu chuyện phiếm làm cho người tham gia cảm
                        thấy thoải mái và nâng cao sự gắn kết cộng đồng giữa họ.
                        Sau khi câu chuyện kết thúc, có thể sẽ không ai nhớ về
                        nội dung của nó nhưng thời gian họ đã chia sẻ cùng nhau
                        vẫn được lưu lại. Thông qua đó, sự gắn kết được hình
                        thành và tăng lên, rồi phát triển thành sự tin tưởng.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="px-[48px] py-[48px] ">
                  <div className="w-[191px] flex flex-col gap-10 text-black  transition duration-500 hover:scale-110">
                    <h2 className="text-5xl text-[#3ac5c9]">07</h2>
                    <b>
                      Suy xét đến mục đích, kết quả, thời gian và những người có
                      liên quan đến công việc mình đang làm.
                    </b>
                    <p>
                      Khi làm việc, nhất định phải suy nghĩ đến mục đích của
                      công việc đó. Đặc biệt, luôn gợi lại những mục đích đó
                      trong quá trình thực hiện cũng là một điều rất quan trọng.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className="bg-[#3ac5c9] ">
                  <div className="px-[48px] py-[48px] ">
                    <div className="w-[191px] flex flex-col gap-10 text-white transition duration-500 hover:scale-110">
                      <h2 className="text-5xl">11</h2>
                      <b>
                        Hoặc là dẫn dắt, hoặc là tuân theo, hoặc là rời khỏi
                        công ty!
                      </b>
                      <p>
                        Trong sự thành công của công việc, Leadership cũng quan
                        trọng nhưng Followership cũng quan trọng không kém.
                        Không có quyết định nào là hoàn hảo. Tuy nhiên so với
                        việc hoàn toàn không thực hiện theo bất cứ quyết định
                        nào, việc thực hiện theo quyết định của tổ chức - dù có
                        thể đó là một quyết định sai - vẫn còn tốt hơn.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div>
                <div className="px-[48px] py-[48px] ">
                  <div className="w-[191px] flex flex-col gap-10 text-black  transition duration-500 hover:scale-110">
                    <h2 className="text-5xl text-[#3ac5c9]">04</h2>
                    <b>Rác được dọn bởi người đầu tiên nhìn thấy nó.</b>
                    <p>
                      Công ty là một xã hội thu nhỏ. Phải biết cống hiến và đóng
                      góp vượt ngoài nhiệm vụ của bản thân, phải nỗ lực vì một
                      cộng đồng phát triển và tốt đẹp (vì nếu đơn thuần chỉ là
                      cố gắng vì thành quả của một dự án thì cũng không khác gì
                      nhân viên của một công ty outsource nào đó mà thôi).
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className="bg-[#3ac5c9] ">
                  <div className="px-[48px] py-[48px] ">
                    <div className="w-[191px] flex flex-col gap-10 text-white transition duration-500 hover:scale-110">
                      <h2 className="text-5xl">08</h2>
                      <b>
                        Trách nhiệm thuộc về người quyết định, không phải người
                        thi hành.
                      </b>
                      <p>
                        Nhiều trường hợp, công việc chúng tôi tiến hành có thể
                        xác suất thất bại lớn. Và điều quan trọng là thông qua
                        thất bại, chúng tôi phải biết liên tục học hỏi, củng cố
                        tổ chức và quy trình làm việc 
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Woowa;
