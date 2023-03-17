import React from "react";

export default function Description() {
  return (
    <div className="col-span-3 sm:col-span-3 md:col-span-3 lg:col-span-2 row-span-1 sm:row-span-1 md:row-span-1 lg:row-span-1 my-auto">
      <div className="w-full flex justify-start flex-col text-center p-4 h-full select-none">
        <h1 className="font-bold mb-2 text-black tracking-tight dark:text-white uppercase text-3xl md:text-5xl lg:text-5xl">
          Assemble<span className="text-blue-700">Pro</span>
        </h1>
        <p className="text-xs md:text-2xl lg:text-lg">
          A productivity app that helps users streamline their workflow and
          optimize their time management through customizable task lists,
          images, videos and project management features.
        </p>
      </div>
    </div>
  );
}
