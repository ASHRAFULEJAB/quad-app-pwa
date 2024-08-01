import React, { useState } from "react";
import Flag from "react-world-flags";

const languageOptions = [
  { value: "pt", label: "Português", code: "PT" },
  { value: "en-uk", label: "English (UK)", code: "GB" },
  { value: "en-us", label: "English (US)", code: "US" },
  { value: "de", label: "Deutsch", code: "DE" },
  { value: "es", label: "Español", code: "ES" },
  { value: "fr", label: "Français", code: "FR" },
  { value: "it", label: "Italiano", code: "IT" },
  { value: "ru", label: "Русский язык", code: "RU" },
  { value: "zh", label: "中文", code: "CN" },
  { value: "ko", label: "한국어", code: "KR" },
];

const LanguageSelector = ({ language, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (value) => {
    onChange(value);
    setIsOpen(false);
  };

  const selectedOption = languageOptions.find(
    (option) => option.value === language
  );
  return (
    <div className="relative inline-block text-left mr-0">
      <div>
        <button
          type="button"
          className="inline-flex justify-between w-full rounded-full 
             px-2 py-3 bg-transparent text-sm font-medium
            text-gray-100 hover:bg-transparent"
          onClick={() => setIsOpen(!isOpen)}
        >
          {selectedOption && (
            <div className="flex items-center">
              <Flag
                code={selectedOption.code}
                className="w-7 h-7 border border-gray-50  rounded-full object-cover"
              />
            </div>
          )}
          <svg
            className="-mr-1  h-5 w-5 mt-2 text-[#000000] "
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      {isOpen && (
        <div
          className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg 
        bg-white ring-1 ring-black ring-opacity-5 max-h-60 overflow-y-auto z-50"
        >
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {languageOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => handleSelect(option.value)}
                className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
              >
                <Flag code={option.code} className="w-6 h-4 mr-2" />
                {option.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
export default LanguageSelector;
