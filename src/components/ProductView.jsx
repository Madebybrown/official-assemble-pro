import React, { useState } from "react";
import { useParams } from "react-router-dom";
import images from "./Data";
import { motion } from "framer-motion";
import ProgressBar from "./ProgressBar";
import VideoSection from "./VideoSection";
import ArticleSection from "./ArticleSection";
import ChecklistSection from "./ChecklistSection";

function ProductView() {
  // Get the ID of the product from the URL using the useParams hook
  const { id } = useParams();

  const [currentArticleIndex, setCurrentArticleIndex] = useState(0);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [currentChecklistIndex, setCurrentChecklistIndex] = useState(0);
  const [isChecked, setIsChecked] = useState(false);

  // Find the product with the specified ID in the images array
  const image = images.find((image) => image.id === id);

  // If there is no product with the specified ID, render a message saying "Image not found"
  if (!image) {
    return <p>Image not found</p>;
  }

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const handleResetButtonClick = () => {
    setIsChecked(false);
  };

  const handleNextClick = () => {
    setCurrentArticleIndex((currentArticleIndex + 1) % image.articles.length);
    setCurrentVideoIndex((currentVideoIndex + 1) % image.video.length);
    setCurrentChecklistIndex(
      (currentChecklistIndex + 1) % image.checklist.length
    );
    handleResetButtonClick();
  };

  const handlePrevClick = () => {
    setCurrentArticleIndex((currentArticleIndex - 1) % image.articles.length);
    setCurrentVideoIndex((currentVideoIndex - 1) % image.video.length);
    setCurrentChecklistIndex(
      (currentChecklistIndex - 1) % image.checklist.length
    );
    handleResetButtonClick();
  };

  const currentArticle = image.articles[currentArticleIndex];
  const currentChecklist = image.checklist[currentChecklistIndex];

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="p-8 flex justify-center items-center h-full w-full container mx-auto"
    >
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 grid-rows-3 sm:grid-rows-3 md:grid-rows-2 lg:grid-rows-2 w-full h-full gap-4">
        {/* If the product has videos, render the VideoSection */}
        {image.video && (
          <div className="bg-gray-300 col-span-2 row-span-1 sm:col-span-2 sm:row-span-1 md:col-span-2 md:row-span-1 lg:col-span-1 lg:row-span-2 p-4 flex uppercase gap-3 font-semibold justify-center items-center rounded-xl">
            <VideoSection image={image} currentVideoIndex={currentVideoIndex} />
          </div>
        )}

        {/* If the product has articles, render the ArticleSection */}
        {image.articles && (
          <div className="bg-gray-300 col-span-2 sm:col-span-2 md:col-span-1 lg:col-span-1 row-span-1 sm:row-span-1 md:row-span-1 lg:row-span-1 w-full p-4 flex flex-col uppercase font-semibold justify-between items-start rounded-xl">
            <ArticleSection currentArticle={currentArticle} />
          </div>
        )}

        {/* If the product has a checklist, render the ChecklistSection */}
        {image.checklist && (
          <div className="bg-gray-300 col-span-2 sm:col-span-2 md:col-span-1 lg:col-span-1 row-span-1 sm:row-span-1 md:row-span-1 lg:row-span-1 p-4 rounded-xl">
            <ChecklistSection
              isChecked={isChecked}
              handleCheckboxChange={handleCheckboxChange}
              currentChecklist={currentChecklist}
            />

            <div className="mt-auto flex justify-between flex-row-reverse items-end w-full">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white text-xs sm:text-sm md:text-md lg:text-md font-bold py-1 px-2 rounded-xl ml-auto"
                onClick={() => {
                  handleNextClick();
                }}
              >
                Next
              </button>

              {currentArticleIndex > 0 ||
              currentVideoIndex > 0 ||
              currentChecklistIndex > 0 ? (
                <button
                  className="bg-blue-500 mr-auto hover:bg-blue-700 text-white text-xs sm:text-sm md:text-md lg:text-md font-bold py-1 px-2 rounded-xl"
                  onClick={() => {
                    handlePrevClick();
                  }}
                >
                  Previous
                </button>
              ) : null}
            </div>
          </div>
        )}
      </div>

      <ProgressBar
        currentVideoIndex={currentVideoIndex}
        totalVideos={image.video.length}
      />
    </motion.div>
  );
}

export default ProductView;
