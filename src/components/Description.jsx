import React from "react";

export default function Description() {
  return (
    <div className="sm:col-span-1 md:col-span-2 sm:row-span-1 md:row-span-1">
      <div className="w-full flex justify-start flex-col text-center p-4 h-full select-none">
        <h1 className="font-bold mb-2 text-black tracking-tight dark:text-white uppercase text-5xl">
          Assemble<span className="text-blue-500 font-extralight">Pro</span>
        </h1>
        <p>
          A productivity app that helps users streamline their workflow and
          optimize their time management through customizable task lists,
          images, videos and project management features.
        </p>
      </div>
    </div>
  );
}
