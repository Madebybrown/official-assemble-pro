import React from "react";

function ArticleSection({ currentArticle }) {
  return (
    <ul className="grid grid-cols-4 gap-4 w-full md:text-xs text-left justify-items-center">
      <li className="col-span-1 flex flex-col mr-auto">
        <span className="font-bold">Art.Num</span>
        {currentArticle.artnums.map((artnumObj) => (
          <span key={artnumObj.artnum} className="text-blue-600 text-xs">
            {artnumObj.artnum}
          </span>
        ))}
      </li>

      <li className="col-span-1 mx-auto flex flex-col">
        <span className="font-bold">Art.Name</span>
        <span className="text-xs capitalize">{currentArticle.artname}</span>
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
  );
}

export default ArticleSection;
