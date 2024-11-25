import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from '@mui/icons-material/Close';
import { AppBar, Box, Grid2, IconButton, Stack, Toolbar, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";

function Navbar() {
  const theme = useTheme(); //for theme consistency

  const [isOpen, setIsOpen] = useState(false); //for responsive navlink section

  //for language switch
  const { t, i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState('');
  const [showLangDropdown, setShowLangDropdown] = useState(false);
  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
    setShowLangDropdown(false);
    setCurrentLanguage(lang);
  };

  return (
    <div>
      <AppBar position="static" className="bg-transparent shadow-none text-black">
        <Toolbar className="lg:flex lg:justify-between">

          {/* Left Section - Home Icon and menu icon (menu icon will only appear in small screens) */}
          <IconButton edge="start" color="inherit" aria-label="menu" className="lg:hidden hover-effect" sx={{ mr: 2 }} onClick={() => setIsOpen(prev => !prev)}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" component="div" className="hover-effect">
            FlagTastic
          </Typography>

          {/* Center Section - Navigation Links (for large screens) */}
          <div className="hidden sm:flex flex-grow justify-center text-lg">
            <a className="m-2 hover-effect hover:text-white">{t('flags')}</a>
            <a className="m-2 hover-effect hover:text-white">{t('services')}</a>
            <a className="m-2 hover-effect hover:text-white">{t('aboutUs')}</a>
            <a className="m-2 hover-effect hover:text-white">{t('contact')}</a>
          </div>

          {/* Language Dropdown container */}
          <div className="flex items-center space-x-4 z-10 right-10 fixed">

            {/* Language Dropdown */}
            <div className="relative">
              <button onClick={() => setShowLangDropdown(!showLangDropdown)} className="flex items-center bg-transparent border-none hover-effect">
                {currentLanguage || 'en'} <ArrowDropDownIcon className="ml-1" />
              </button>
              {showLangDropdown && (
                <Box className="absolute right-0 list-none p-0 rounded-lg shadow-lg" sx={{ backgroundColor: theme.palette.primary.light }}>
                  <li onClick={() => handleLanguageChange('en')} className="hover:bg-blue-300 py-2 px-4 rounded-t-lg">English</li>
                  <li onClick={() => handleLanguageChange('my')} className="hover:bg-blue-300 py-2 px-4">Myanmar</li>
                  <li onClick={() => handleLanguageChange('ko')} className="hover:bg-blue-300 py-2 px-4">Korean</li>
                  <li onClick={() => handleLanguageChange('ja')} className="hover:bg-blue-300 py-2 px-4">Japanese</li>
                  <li onClick={() => handleLanguageChange('zh')} className="hover:bg-blue-300 py-2 px-4 rounded-b-lg">Chinese</li>
                </Box>
              )}
            </div>

          </div>

        </Toolbar>


        {/* Center - Nav Links (for small screens) */}
        <Box
          id="nav-menu"
          className={`lg:hidden md:block absolute top-0 ${isOpen ? "left-0" : "left-[-100%]"} min-h-screen w-full flex items-center justify-center duration-300`
          } sx={{
            backdropFilter: 'blur(10px)',
            zIndex: 9999,  // Ensure the box is above all other content
          }}
        >

          {/* Close Button */}
          <IconButton
            color="inherit"
            sx={{ position: 'absolute', top: 20, right: 20 }}
            onClick={() => setIsOpen(false)}  // Close the menu when clicked
          >
            <CloseIcon />
          </IconButton>

          {/* nav links */}
          <ul className="flex flex-col gap-7 lg:flex-row list-none text-xl">
            <a className="m-2 hover-effect hover:text-white">{t('flags')}</a>
            <a className="m-2 hover-effect hover:text-white">{t('services')}</a>
            <a className="m-2 hover-effect hover:text-white">{t('aboutUs')}</a>
            <a className="m-2 hover-effect hover:text-white">{t('contact')}</a>
          </ul>
        </Box>

      </AppBar>

    </div>
  );
}

export default Navbar;
