import React, { useState } from "react";
import { useParams } from "react-router-dom";
import images from "./Data";
import { motion } from "framer-motion";

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

  const handleNextArticle = () => {
    // If there are no more articles, start over from the beginning
    if (currentArticleIndex === image.articles.length - 1) {
      setCurrentArticleIndex(0);
    } else {
      setCurrentArticleIndex(currentArticleIndex + 1);
    }
  };

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };
  
  const handleResetButtonClick = () => {
    setIsChecked(false);
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
      <div className="grid grid-cols-2 grid-rows-2 w-full h-full gap-4">
        {/* If the product has articles, render a section for them */}
        {image.articles && (
          <div className="bg-gray-300 col-span-1 row-span-1 dark:bg-gray-900 w-full p-4 flex flex-col uppercase font-semibold justify-between items-start rounded-xl">
            {/* Render a list of the current article */}
            <ul className="grid grid-cols-4 gap-4 w-full md:text-xs text-left justify-items-center">
              <li className="col-span-1 flex flex-col mr-auto">
                <span className="font-bold">Art.Num</span>
                {currentArticle.artnums.map((artnumObj) => (
                  <span
                    key={artnumObj.artnum}
                    className="text-blue-600 text-xs"
                  >
                    {artnumObj.artnum}
                  </span>
                ))}
              </li>

              <li className="col-span-1 mx-auto flex flex-col">
                <span className="font-bold">Art.Name</span>
                <span className="text-xs capitalize">
                  {currentArticle.artname}
                </span>
              </li>

              <li className="col-span-1 ml-auto flex flex-col">
                <span className="font-bold">Amount</span>
                <span className="text-xs">{currentArticle.amount}</span>
              </li>

              <li className="col-span-1 ml-auto flex flex-col">
                <span className="font-bold">Location</span>
                <span className="text-xs">{currentArticle.location}</span>
              </li>
            </ul>

            <div className="mt-auto flex justify-between flex-row-reverse items-end w-full">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white text-xs font-bold py-1 px-2 rounded ml-auto"
                onClick={() => {
                  setCurrentArticleIndex(
                    (currentArticleIndex + 1) % image.articles.length
                  );
                  setCurrentVideoIndex(
                    (currentVideoIndex + 1) % image.video.length
                  );
                  setCurrentChecklistIndex(
                    (currentChecklistIndex + 1) % image.checklist.length
                  );
                  handleResetButtonClick()
                }}
              >
                Next
              </button>

              {currentArticleIndex > 0 ||
              currentVideoIndex > 0 ||
              currentChecklistIndex > 0 ? (
                <button
                  className="bg-blue-500 mr-auto hover:bg-blue-700 text-white text-xs font-bold py-1 px-2 rounded"
                  onClick={() => {
                    setCurrentArticleIndex(
                      (currentArticleIndex - 1) % image.articles.length
                    );
                    setCurrentVideoIndex(
                      (currentVideoIndex - 1) % image.video.length
                    );
                    setCurrentChecklistIndex(
                      (currentChecklistIndex - 1) % image.checklist.length
                    );
                    handleResetButtonClick()
                  }}
                >
                  Previous
                </button>
              ) : null}
            </div>
          </div>
        )}

        {/* If the product has videos, render a section for them */}
        {image.video && (
          <div className="bg-gray-300 col-span-1 row-span-2 dark:bg-gray-900 p-4 flex uppercase gap-3 font-semibold justify-center items-center rounded-xl">
            {/* Render a list of the videos */}
            <div className="w-full h-full">
              {image.video.map((video, index) => (
                <div
                  className="w-full h-full"
                  key={index}
                  style={{
                    display: index === currentVideoIndex ? "block" : "none",
                  }}
                >
                  <video
                    width="100%"
                    height="auto"
                    controls
                    loop
                    muted
                    className="block object-cover w-full h-full rounded-xl"
                  >
                    <source src={video.op} type="video/mp4" />
                  </video>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* If the product has a checklist, render a section for it */}
        {image.checklist && (
          <div className="bg-gray-300 col-span-1 row-span-1 dark:bg-gray-900 p-4 rounded-xl">
            {/* Render a list of the checklist items */}
            <ul className="flex flex-col gap-3">
              {image.checklist.map((currentChecklist, index) => (
                <li key={index} className="flex items-center gap-3">
                  <input
                    checked={isChecked} onChange={handleCheckboxChange}
                    type="checkbox"
                    id={`checklist-${index}`}
                    name={`checklist-${index}`}
                  />
                  <label htmlFor={`checklist-${index}`}>
                    {currentChecklist.checklistItem}
                  </label>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default ProductView;
