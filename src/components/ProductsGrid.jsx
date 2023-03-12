import React from "react";
import { Link } from "react-router-dom";
import images from "../components/Data";

// This component displays a grid of product images, each of which is a link to a product detail page.
export default function ProductsGrid() {
  return (
    // Grid container for the images
    <div className="grid sm:grid-cols-3 sm:grid-rows-2 md:grid-cols-2 lg:grid-cols-2 md:grid-rows-3 lg:grid-rows-3 gap-4 sm:col-span-1 md:col-span-1 lg:col-span-1 sm:row-span-2 md:row-span-3 lg:row-span-3">
       {/* Map through the images data and create an image container for each one */}
      {images.map((image) => {
        return (
          // Individual image container
          <div
            key={image.id}
            className="bg-gray-300 dark:bg-white rounded-xl flex justify-center shadow-lg items-center cursor-pointer hover:bg-gray-400 duration-300"
          >
            <div className="w-full h-full">
              {/* Link to product detail page */}
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
