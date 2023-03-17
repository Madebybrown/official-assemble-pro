import React from "react";
import { useLocation } from "react-router-dom";
import { AiOutlineCopyrightCircle } from "react-icons/ai";

// Footer component that shows the copyright information
export default function Footer() {
  const location = useLocation();

  return (
    <div className="h-full">
      <div className="flex justify-center items-center h-full">
        {location.pathname === "/" && (
          <p className="text-xs text-gray-600 dark:text-white font-light flex justify-center items-center gap-1">
            {/* Year and company name */}
            2023 AssemblePro
            {/* Copyright icon */}
            <AiOutlineCopyrightCircle />
            {/* Creator name and all rights reserved */}
            Madebybrown | all rights reserved.
          </p>
        )}
      </div>
    </div>
  );
}
