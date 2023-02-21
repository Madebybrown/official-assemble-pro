import React from "react";

const Product = () => {
  return (
    <div className="p-8 flex justify-center items-center h-full w-full">
      <div className="grid grid-cols-2 grid-rows-2 w-full h-full gap-4">
        <div className="bg-gray-300 dark:bg-gray-900 p-4 flex justify-center items-center">Articles</div>
        <div className="bg-gray-300 dark:bg-gray-900 p-4 flex justify-center items-center">Video</div>
        <div className="bg-gray-300 dark:bg-gray-900 p-4 flex justify-center items-center">Checklist</div>
        <div className="bg-gray-300 dark:bg-gray-900 p-4 flex justify-center items-center">Instructions</div>
      </div>
    </div>
  );
};

export default Product;
