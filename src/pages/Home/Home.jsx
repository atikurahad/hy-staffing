import React from "react";
import Hero from "../../components/home/Hero";
import Common from "../../components/common/Common";
import Explore from "../../components/explore/Explore";

const Home = () => {
  return (
    <>
      {<Hero />}

      {<Common />}
      {<Explore />}
    </>
  );
};

export default Home;
