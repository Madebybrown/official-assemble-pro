import ImageSlider from "../components/ImageSlider";
import Description from "../components/Description";
import ProductsGrid from "../components/ProductsGrid";

const Home = () => {
  return (
    <div className="grid grid-cols-5 grid-rows-6 gap-6 p-8 h-full w-full">
      {/* Products grid */}
      <ProductsGrid />

      {/* Image + video montage */}
      <ImageSlider />

      {/* App Description */}
      <Description />
    </div>
  );
};

export default Home;
