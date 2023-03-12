import React from "react";
import Description from "../components/Description";
import ProductsGrid from "../components/ProductsGrid";
import VideoMontage from "../components/VideoMontage";

const Home = () => {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-3 sm:grid-rows-6 md:grid-rows-3 gap-6 px-8 py-7 h-full w-full">
      {/* render ProductsGrid component */}
      <ProductsGrid />
      {/* render VideoMontage component */}
      <VideoMontage />
      {/* render Description component */}
      <Description />
    </div>
  );
};

export default Home;
