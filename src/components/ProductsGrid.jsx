import React from "react";
import { Link } from "react-router-dom";
import images from "../components/Data";

export default function ProductsGrid() {
  return (
    <div className="grid grid-cols-2 grid-rows-3 gap-4 col-span-2 row-span-6">
      {images.map((image) => {
        return (
          <div
            key={image.id}
            className="bg-gray-300 dark:bg-white rounded-xl flex justify-center shadow-lg items-center cursor-pointer hover:bg-gray-400 duration-300"
          >
            <div className="w-full h-full">
              <Link to={`/product/${image.id}`}>
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-full w-full block object-cover hover:opacity-70 duration-300 rounded-xl"
                />
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}
