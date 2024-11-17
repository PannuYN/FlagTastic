import React from 'react'
import Navbar from './Navbar';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@emotion/react';
import { Button, IconButton, Typography } from '@mui/material';
import SportsScoreIcon from '@mui/icons-material/SportsScore';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import { bounceAnimation, colorAnimation, opacityAnimation } from './animation';
import SpecialFlag from './SpecialFlag';

function Test() {
  //for language switch
  const { t } = useTranslation();
  const theme = useTheme(); //for theme consistency

  //to scroll down for special flag page when button is clicked
  const handleScroll = () => {
    document.getElementById('specialFlag').scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <div className='flex flex-col'>
      <Navbar />

      {/* <img src='/images/welcome-img2.png' alt='Welcome' className="w-[70%] z-[-1] absolute top-0 right-0 opacity-70" /> */}

      <div className='flex justify-center items-center mb-20'>

        {/* Left side - flag images */}
        <div className='ml-5 text-sm sm:w-full lg:w-1/2 p-3 relative flex justify-start'>
          <img src='/images/welcome-img.png' alt='welcome' className='w-[60%] opacity-50' />
          <img src='/images/welcome-img.png' alt='welcome' className='w-[60%] absolute left-36 top-20 image-hover-effect' />
        </div>

        {/* Right side */}
        <div className='flex flex-col justify-center m-5 text-md sm:w-full lg:w-1/2 p-5'>

          {/* title and paragraph */}
          <div className='hover-effect'>
            <Typography variant="h4" component="h1" className="font-bold mb-4 text-start text-2xl">
              {t('welcome-title')}
            </Typography>
            <p className="text-md leading-relaxed text-justify">{t('welcome-paragraph')}</p>
          </div>

          {/* down arrow icon */}
          <KeyboardDoubleArrowDownIcon
            sx={{
              animation: `${bounceAnimation} 1s infinite, ${colorAnimation} 2s infinite, ${opacityAnimation} 2s infinite`, // Added opacity animation
              fontSize: '10vw', // Responsive font size             
            }}
            className='mx-auto m-2'
          />

          {/* button for today's special flag */}
          <Button
            variant="contained"
            sx={{ backgroundColor: theme.palette.primary.light }}
            className="flex items-center px-6 py-3 mb-3 text-xl font-bold rounded-lg shadow-2xl shadow-blue-950 hover:bg-black hover:text-white transition-all mx-auto text-violet-600"
            onClick={handleScroll}
          >
            {/* Flag Icon */}
            <SportsScoreIcon className='text-violet-600 hover:text-violet-200 mr-2' />
            {/* Button Text */}
            {t('special-flag-btn')}
          </Button>

        </div>

      </div>

      <SpecialFlag />

    </div>
  )
}

export default Test