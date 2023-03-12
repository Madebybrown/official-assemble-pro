import React from "react";
import Description from "../components/Description";
import ProductsGrid from "../components/ProductsGrid";
import VideoMontage from "../components/VideoMontage";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 sm:grid-rows-6 md:grid-rows-3 lg:grid-rows-3 gap-6 px-8 py-7 h-full w-full"
    >
      {/* render ProductsGrid component */}
      <ProductsGrid />
      {/* render VideoMontage component */}
      <VideoMontage />
      {/* render Description component */}
      <Description />
    </motion.div>
  );
};

export default Home;
