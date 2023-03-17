import React from "react";

function VideoSection({ image, currentVideoIndex }) {
  return (
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
  );
}

export default VideoSection;
