import React from "react";

const ProgressBar = ({ currentVideoIndex, totalVideos }) => {
  const donePercentage = ((currentVideoIndex + 1) / totalVideos) * 100;

  return (
    <div className="absolute pt-1 bottom-0 z-20 w-full px-8 mb-2">
      <div className="flex mb-2 items-center justify-between">
        <div>
          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-sky-600 bg-sky-200">
            Task in progress
          </span>
        </div>
        <div className="text-right">
          <span className="text-xs font-semibold inline-block text-sky-600">
            Done {donePercentage}%
          </span>
        </div>
      </div>
      <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-sky-200">
        <div
          style={{ width: `${donePercentage}%` }}
          className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-sky-500"
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;