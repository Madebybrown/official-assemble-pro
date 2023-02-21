import React from "react";
import {AiOutlineCopyrightCircle} from 'react-icons/ai'

export default function Footer() {
  return (
    <div className="flex justify-center items-center">
      <p className="text-sm text-gray-600 dark:text-white flex justify-center items-center gap-1">
        2023 copyright <AiOutlineCopyrightCircle /> Madebybrown | all rights reserved.
      </p>
    </div>
  );
}
