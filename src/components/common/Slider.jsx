import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import quoteIcon from "../../assets/images/Quote.svg";

function Slider() {
  return (
    <>
      {/* head section */}
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-[#5A5C5F] text-center font-serif text-[56px] font-[800] leading-[132%]">
          Success Stories from Our Candidates
        </h2>
        <p className="leading-[164%] text-[#5A5C5F] pt-6">
          Real People, Real Results: How Our Services Have Transformed Careers.
        </p>
      </div>

      {/* Slider section */}

      <div className="p-20">
      <Swiper
        modules={[Pagination]}
        spaceBetween={20}
        slidesPerView={3}
        loop={true}
        pagination={{ clickable: true }}
      >
        <SwiperSlide className="bg-[#EBECF0] p-[56px] w-[716px] hover:bg-red-600 group rounded-[16px]">
          <div className="flex justify-between">
            <div className="flex flex-col gap-[16px] flex-start">
              <h1 className="text-[#5A5C5F] font-[600] text-[32px] leading-[132%] group-hover:text-white">
                Leslie Alexander
              </h1>
              <small className="text-[#5A5C5F] group-hover:text-white ">
                Logistics Coordinator
              </small>
              <p className="text-[#5A5C5F]  text-[20px] leading-[164%] group-hover:text-white">
                ProLogistix helped me find a job in logistics that I love. The
                process was quick and easy!
              </p>
            </div>
            <img src={quoteIcon} alt="quote" className="w-[97px] h-[75px]" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-[#EBECF0] p-[56px] w-[716px] hover:bg-red-600 group rounded-[16px]">
          <div className="flex justify-between">
            <div className="flex flex-col gap-[16px] flex-start">
              <h1 className="text-[#5A5C5F] font-[600] text-[32px] leading-[132%] group-hover:text-white">
                Leslie Alexander
              </h1>
              <small className="text-[5A5C5F] group-hover:text-white ">
                Logistics Coordinator
              </small>
              <p className="text-[#5A5C5F]  text-[20px] leading-[164%] group-hover:text-white">
                ProLogistix helped me find a job in logistics that I love. The
                process was quick and easy!
              </p>
            </div>
            <img src={quoteIcon} alt="quote" className="w-[97px] h-[75px]" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-[#EBECF0] p-[56px] w-[716px] hover:bg-red-600 group rounded-[16px]">
          <div className="flex justify-between">
            <div className="flex flex-col gap-[16px] flex-start">
              <h1 className="text-[#5A5C5F] font-[600] text-[32px] leading-[132%] group-hover:text-white">
                Leslie Alexander
              </h1>
              <small className="text-[5A5C5F] group-hover:text-white ">
                Logistics Coordinator
              </small>
              <p className="text-[#5A5C5F]  text-[20px] leading-[164%] group-hover:text-white">
                ProLogistix helped me find a job in logistics that I love. The
                process was quick and easy!
              </p>
            </div>
            <img src={quoteIcon} alt="quote" className="w-[97px] h-[75px]" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-[#EBECF0] p-[56px] w-[716px] hover:bg-red-600 group rounded-[16px]">
          <div className="flex justify-between">
            <div className="flex flex-col gap-[16px] flex-start">
              <h1 className="text-[#5A5C5F] font-[600] text-[32px] leading-[132%] group-hover:text-white">
                Leslie Alexander
              </h1>
              <small className="text-[5A5C5F] group-hover:text-white ">
                Logistics Coordinator
              </small>
              <p className="text-[#5A5C5F]  text-[20px] leading-[164%] group-hover:text-white">
                ProLogistix helped me find a job in logistics that I love. The
                process was quick and easy!
              </p>
            </div>
            <img src={quoteIcon} alt="quote" className="w-[97px] h-[75px]" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-[#EBECF0] p-[56px] w-[716px] hover:bg-red-600 group rounded-[16px]">
          <div className="flex justify-between">
            <div className="flex flex-col gap-[16px] flex-start">
              <h1 className="text-[#5A5C5F] font-[600] text-[32px] leading-[132%] group-hover:text-white">
                Leslie Alexander
              </h1>
              <small className="text-[5A5C5F] group-hover:text-white ">
                Logistics Coordinator
              </small>
              <p className="text-[#5A5C5F]  text-[20px] leading-[164%] group-hover:text-white">
                ProLogistix helped me find a job in logistics that I love. The
                process was quick and easy!
              </p>
            </div>
            <img src={quoteIcon} alt="quote" className="w-[97px] h-[75px]" />
          </div>
        </SwiperSlide>
      </Swiper>
      </div>
    </>
  );
}

export default Slider;
