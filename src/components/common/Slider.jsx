import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import quoteIcon from "../../assets/images/Quote.svg";

const testimonials = [
  {
    name: "Leslie Alexander",
    role: "Logistics Coordinator",
    feedback:
      "ProLogistix helped me find a job in logistics that I love. The process was quick and easy!",
  },
  {
    name: "Jane Doe",
    role: "Software Engineer",
    feedback:
      "Thanks to this platform, I landed my dream tech job in just a few weeks!",
  },
  {
    name: "John Smith",
    role: "Marketing Specialist",
    feedback:
      "Great service! I got hired by a top company, and the experience was seamless.",
  },
  {
    name: "Emily Brown",
    role: "Data Analyst",
    feedback:
      "This service provided me with amazing job opportunities. Highly recommended!",
  },
  {
    name: "Michael Lee",
    role: "Product Manager",
    feedback:
      "I transitioned smoothly into a senior role, thanks to their excellent career guidance!",
  },
];

function Slider() {
  const [activeIndex, setActiveIndex] = useState(1);
  const [swiper, setSwiper] = useState(null);

  // Auto-slide every 2 seconds
  useEffect(() => {
    if (!swiper) return;
    const interval = setInterval(() => {
      if (swiper) swiper.slideNext();
    }, 2000);

    return () => clearInterval(interval);
  }, [swiper]);

  return (
    <>
      {/* Head section */}
      <div className="flex flex-col items-center justify-center text-center">
        <h2 className="text-[#5A5C5F] font-serif text-[56px] font-[800] leading-[132%]">
          Success Stories from Our Candidates
        </h2>
        <p className="leading-[164%] text-[#5A5C5F] pt-6">
          Real People, Real Results: How Our Services Have Transformed Careers.
        </p>
      </div>

      {/* Slider section */}
      <div className="p-10 md:p-20">
        <Swiper
          modules={[Pagination]}
          spaceBetween={20}
          
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          coverflowEffect={{
            rotate: -50,
            stretch: 0,
            depth: 150,
            modifier: 2.5,
          }}
          centeredSlides={true}
          loop={true}
          pagination={{ clickable: true }}
          onSwiper={setSwiper}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide
              key={index}
              className={`p-[56px] rounded-[16px] transition-all duration-500 flex flex-col justify-between min-h-[350px] ${
                activeIndex === index
                  ? "bg-red-600 text-white shadow-2xl"
                  : "bg-[#EBECF0] text-[#5A5C5F]"
              }`}
            >
              <div className="flex justify-between">
                <div className="flex flex-col gap-[16px]">
                  <h1 className="font-[600] text-[32px] leading-[132%]">
                    {item.name}
                  </h1>
                  <small>{item.role}</small>
                  <p className="text-[20px] leading-[164%]">{item.feedback}</p>
                </div>
                <img src={quoteIcon} alt="quote" className="w-[97px] h-[75px]" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

export default Slider;
