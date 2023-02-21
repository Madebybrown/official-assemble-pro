import React from "react";
import Description from "../components/Description";
import ProductsGrid from "../components/ProductsGrid";
import VideoMontage from "../components/VideoMontage";

const Home = () => {
  return (
    <div className="grid grid-cols-5 grid-rows-6 gap-6 p-8 h-full w-full">
      {/* Products grid */}
      <ProductsGrid />

      {/* Image + video montage */}
      <VideoMontage />

      {/* App Description */}
      <Description />
    </div>
  );
};

export default Home;
