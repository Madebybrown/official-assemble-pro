import React from "react";
import { useParams } from "react-router-dom";
import images from "../components/Data";

const Product = () => {
  const { id } = useParams();
  const image = images.find((image) => image.id === id);

  if (!image) {
    return <p>Image not found</p>;
  }

  return (
    <div className="p-8 flex justify-center items-center h-full w-full">
      <div className="grid grid-cols-2 grid-rows-2 w-full h-full gap-4">
        {image.articles && (
          <div className="bg-gray-300 dark:bg-gray-900 p-4 flex justify-center items-center">
            <h2>Articles</h2>
            <ul>
              {image.articles.split(", ").map((article, index) => (
                <li key={index}>{article}</li>
              ))}
            </ul>
          </div>
        )}
        {image.video && (
          <div className="bg-gray-300 dark:bg-gray-900 p-4 flex justify-center items-center">
            <h2>Video</h2>
            <ul>
              {image.video.split(", ").map((video, index) => (
                <li key={index}>{video}</li>
              ))}
            </ul>
          </div>
        )}
        {image.checklist && (
          <div className="bg-gray-300 dark:bg-gray-900 p-4 flex justify-center items-center">
            <h2>Checklist</h2>
            <ul>
              {image.checklist.split(", ").map((checklist, index) => (
                <li key={index}>{checklist}</li>
              ))}
            </ul>
          </div>
        )}
        {image.instructions && (
          <div className="bg-gray-300 dark:bg-gray-900 p-4 flex justify-center items-center">
            <h2>Instructions</h2>
            <ul>
              {image.instructions.split(", ").map((instruction, index) => (
                <li key={index}>{instruction}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Product;
