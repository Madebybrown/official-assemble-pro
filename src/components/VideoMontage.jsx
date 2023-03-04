import React from "react";
import Video from "../assets/static/video.mp4";

export default function VideoMontage() {
  return (
    <div className="bg-gray-300 dark:bg-white col-span-3 row-span-3 shadow-lg rounded-sm rounded-xl">
      {/* The video is displayed using a HTML5 video element */}
      <div className="w-full h-full flex justify-center items-center">
        <video
          src={Video}
          autoPlay
          loop
          muted
          className="block object-cover w-full h-full rounded-xl" // styled with tailwindCSS
        />
      </div>
    </div>
  );
}
