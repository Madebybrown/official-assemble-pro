import React from "react";

function ChecklistSection({ isChecked, handleCheckboxChange, currentChecklist }) {
  return (
    <ul className="flex flex-col gap-3">
      <li className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label>{currentChecklist.checklistItem}</label>
      </li>
    </ul>
  );
}

export default ChecklistSection;