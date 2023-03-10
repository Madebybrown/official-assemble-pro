import React from "react";
import { useParams } from "react-router-dom";
import images from "./Data";
import { motion } from "framer-motion";

function ProductView() {
  // Get the ID of the product from the URL using the useParams hook
  const { id } = useParams();

  // Find the product with the specified ID in the images array
  const image = images.find((image) => image.id === id);

  // If there is no product with the specified ID, render a message saying "Image not found"
  if (!image) {
    return <p>Image not found</p>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="p-8 flex justify-center items-center h-full w-full container mx-auto"
    >
      <div className="grid grid-cols-2 grid-rows-2 w-full h-full gap-4">
        {/* If the product has articles, render a section for them */}
        {image.articles && (
          <div className="bg-gray-300 dark:bg-gray-900 w-full p-4 flex uppercase font-semibold justify-center items-start rounded-xl">
            {/* Render a list of the articles props */}
            <ul className="flex w-full justify-between md:text-xs">
              <li>
                <span className="font-bold">Art.Num</span> <br />{" "}
                <span className="text-blue-600 text-xs">
                  {image.articles.artnum}
                </span>
              </li>
              <li>
                <span className="font-bold">Art.Name</span> <br />{" "}
                <span className="text-xs capitalize">
                  {image.articles.artname}
                </span>
              </li>
              <li>
                <span className="font-bold">Amount</span> <br />{" "}
                <span className="text-xs">{image.articles.amount}</span>
              </li>
              <li>
                <span className="font-bold">Location</span> <br />{" "}
                <span className="text-xs">{image.articles.location}</span>
              </li>
            </ul>
          </div>
        )}

        {/* If the product has videos, render a section for them */}
        {image.video && (
          <div className="bg-gray-300 dark:bg-gray-900 p-4 flex uppercase gap-3 font-semibold justify-center items-center rounded-xl">
            <h2 className="font-bold uppercase">Video</h2>
            <p>|</p>
            {/* Render a list of the videos */}
            <ul className="flex gap-3">
              {image.video.split(", ").map((video, index) => (
                <li key={index}>{video}</li>
              ))}
            </ul>
          </div>
        )}
        {/* If the product has a checklist, render a section for it */}
        {image.checklist && (
          <div className="bg-gray-300 dark:bg-gray-900 p-4 flex uppercase gap-3 font-semibold justify-center items-center rounded-xl">
            <h2 className="font-bold uppercase">Checklist</h2>
            <p>|</p>
            {/* Render a list of the checklist items */}
            <ul className="flex gap-3">
              {image.checklist.split(", ").map((checklist, index) => (
                <li key={index}>{checklist}</li>
              ))}
            </ul>
          </div>
        )}
        {/* If the product has instructions, render a section for them */}
        {image.instructions && (
          <div className="bg-gray-300 dark:bg-gray-900 p-4 flex uppercase gap-3 font-semibold justify-center items-center rounded-xl">
            <h2 className="font-bold uppercase">Instructions</h2>
            <p>|</p>
            {/* Render a list of the instructions */}
            <ul className="flex gap-3">
              {image.instructions.split(", ").map((instruction, index) => (
                <li key={index}>{instruction}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default ProductView;
