import React from 'react'
import Navbar from './Navbar';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@emotion/react';
import { Button, IconButton } from '@mui/material';

function Test() {
  //for language switch
  const { t } = useTranslation();
  const theme = useTheme(); //for theme consistency
  return (
    <div className='image-container'>
      <Navbar />

      {/* <img src='/images/welcome-img2.png' alt='Welcome' className="w-[70%] z-[-1] absolute top-0 right-0 opacity-70" /> */}

      <div className='flex justify-center items-center'>
        <div className='ml-5 text-sm sm:w-full lg:w-1/2 p-3 relative flex justify-start'>
          <img src='/images/welcome-img.png' alt='welcome' className='w-[60%] opacity-50' />
          <img src='/images/welcome-img.png' alt='welcome' className='w-[60%] absolute left-36 top-20 image-hover-effect' />
        </div>
        <div className='m-5 text-md sm:w-full lg:w-1/2 p-5'>
          <div className='hover-effect'>
          <h3>{t('welcome-title')}</h3>
          <p>{t('welcome-paragraph')}</p>
          </div>

          <Button
            variant="contained"
            color="primary"
            className="flex items-center px-6 py-3 text-xl font-bold rounded-lg shadow-lg hover:bg-blue-600 transition-all"
          >
            {/* Flag Icon Button */}
            <IconButton className="mr-3">
              
            </IconButton>
            {/* Button Text */}
            Check out today's special flag
          </Button>
        </div>
      </div>



    </div>
  )
}

export default Test