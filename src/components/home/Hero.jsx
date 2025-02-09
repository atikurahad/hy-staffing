
import worker from "../../assets/images/Group 2.png";

const Hero = () => {
  return (
    <>
      {" "}
      <div className="relative">
        <div className="flex  items-center justify-center ">
          <img
            src={worker}
            alt="worker"
            className="w-full mt-[-40px]"
          />
          <div className="absolute top-[108px] left-[176px]">
            <h1 className="w-[859px] z-10 font-serif text-[80px] font-semibold leading-[89.6px] text-[#5A5C5F]">
              Establishing Productive Relationships
            </h1>
            <p className="w-[645px] mt-[24px] text-textColor text-[16px] font-normal leading-[26.24px]">
              Hy Staffing precisely matches your skills with the best position
              that brings you success in the job you love.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full h-[166px] bg-[#E5383B]">
        <div className="px-[338px] py-[37px ] flex items-center justify-between text-center">
          <div>
            <div>
              {" "}
              <h1 className="text-[64px] font-[700] font-serif text-white ">
                30,000
              </h1>
              <p className="uppercase text-[24px] font-[400] text-white font-serif">
                Job placements
              </p>
            </div>
          </div>
          <div>
            <div>
              {" "}
              <h1 className="text-[64px] font-[700] font-serif text-white leading-[100%]">
                100+
              </h1>
              <p className="uppercase text-[24px] font-[400] text-white font-serif">
                warehouses in the united states
              </p>
            </div>
          </div>
          <div>
            <div>
              {" "}
              <h1 className="text-[64px] font-[700] font-serif text-white leading-[100%]">
              99%
              </h1>
              <p className="uppercase text-[24px] text-white font-serif font-[400]">
              Satisfaction rate
              </p>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};
export default Hero;
