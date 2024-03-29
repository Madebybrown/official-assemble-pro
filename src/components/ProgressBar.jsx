import React from "react";

const ProgressBar = ({ currentVideo, currentVideoIndex, totalVideos }) => {
  const donePercentage =
    totalVideos > 1 ? (currentVideoIndex / (totalVideos - 1)) * 100 : 0;

  return (
    <div className="sm:block md:block lg:block absolute h-16 bottom-0 z-20 w-full px-8">
      <div className="flex mb-2 items-center justify-between">
        <div>
          {currentVideo && (
            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-white bg-blue-700 mr-2">
              {currentVideo.alt}
            </span>
          )}
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
