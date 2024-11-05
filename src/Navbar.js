import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

function Navbar() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [showLangDropdown, setShowLangDropdown] = useState(false);

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
    setShowLangDropdown(false);
  };

  return (
    <div className="shadow-lg mb-3 sticky top-0 z-10">
      <div className="relative bg-blue-500 w-full top-0 left-0 z-50">
        <div className="container flex items-center justify-between h-10 sm:h-14">
          <div className="font-Ubuntu sm:text-2xl text-white">VM APP</div>

          {/* Center - Nav Links */}
          <div
            id="nav-menu"
            className={`absolute top-0 ${isOpen ? "left-0" : "left-[-100%]"} min-h-screen w-full bg-orange-900/80 backdrop-blur-sm flex items-center justify-center duration-300 lg:static lg:min-h-fit lg:bg-transparent lg:w-auto`}
          >
            <ul className="flex flex-col gap-7 lg:flex-row">
              <li className="text-white">{t('aboutUs')}</li>
              <li className="text-white">{t('services')}</li>
              <li className="text-white">{t('contact')}</li>
            </ul>
          </div>

          {/* Language Dropdown container */}
          <div className="flex items-center space-x-4">
            {/* Language Dropdown */}
            <div className="relative">
              <button onClick={() => setShowLangDropdown(!showLangDropdown)} className="text-white flex items-center">
                {t('language')} <ArrowDropDownIcon className="ml-1" />
              </button>
              {showLangDropdown && (
                <ul className="absolute right-0 bg-white text-black p-2 rounded shadow-md mt-2">
                  <li onClick={() => handleLanguageChange('en')} className="hover:bg-gray-100 p-2">English</li>
                  <li onClick={() => handleLanguageChange('my')} className="hover:bg-gray-100 p-2">Myanmar</li>
                  <li onClick={() => handleLanguageChange('ko')} className="hover:bg-gray-100 p-2">Korean</li>
                  <li onClick={() => handleLanguageChange('ja')} className="hover:bg-gray-100 p-2">Japanese</li>
                  <li onClick={() => handleLanguageChange('zh')} className="hover:bg-gray-100 p-2">Chinese</li>
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
