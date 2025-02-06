import React from "react";
import Hero from "../../components/home/Hero";
import Common from "../../components/common/Common";
import Explore from "../../components/common/Explore";
import Works from "../../components/common/Works";
import Slider from "../../components/common/Slider";
// import Apply from "../../components/common/Apply";

const Home = () => {
  return (
    <>
      {<Hero />}

      {<Common />}
      {<Explore />}
      {<Works />}
      {<Slider/>}
      {/* {<Apply />} */}
    </>
  );
};

export default Home;
