import React from "react";

function ChecklistSection({
  isChecked,
  handleCheckboxChange,
  currentChecklist,
}) {
  return (
    <div className="h-[88%] sm:h-[92%] md:h-[94%] lg:h-[88%]">
      <div className="w-full">
        <h2 className="text-center uppercase font-bold">Checklist</h2>
      </div>
      <div>
        <ul className="flex flex-row sm:flex-row md:flex-col lg:flex-col gap-3 ">
          <li className="flex items-center gap-3">
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
              className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label>{currentChecklist.checklistItem}</label>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ChecklistSection;
