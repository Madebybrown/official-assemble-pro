import React from "react";
import images from "./Data";

const ProgressBar = ({ currentVideoIndex, totalVideos }) => {
  const donePercentage = totalVideos > 1 ? (currentVideoIndex / (totalVideos - 1)) * 100 : 0;
  const currentImage = images[currentVideoIndex];

  return (
    <div className="absolute pt-1 bottom-0 z-20 w-full px-8 mb-2">
      <div className="flex mb-2 items-center justify-between">
        <div>
          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-white bg-blue-700">
            {currentImage ? `Task in progress: ${currentImage.alt}` : "Task in progress"}
          </span>
        </div>
        <div className="text-right">
          <span className="text-xs font-semibold inline-block text-blue-700">
            Done {donePercentage}%
          </span>
        </div>
      </div>
      <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
        <div
          style={{ width: `${donePercentage}%` }}
          className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-700"
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
