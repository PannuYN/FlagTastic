import { useTheme } from '@emotion/react';
import { Fab, IconButton, Typography } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

function SpecialFlag() {
    //for language switch
    const { t } = useTranslation();
    const theme = useTheme(); //for theme consistency

    //to scroll down for special flag page when button is clicked
    const handleScroll = (destinationId) => {
        document.getElementById(destinationId).scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    };
    return (
        <div id="specialFlag">

            <div className='flex flex-wrap justify-center mb-40 relative'>

                {/* Background image */}
                <div className="absolute inset-0 w-full h-full">
                    <img
                        src="/images/switzerland/welcome-img.png"
                        alt="Switzerland Mountains"
                        className="w-full opacity-40 -z-10"
                        style={{
                            maskImage: 'linear-gradient(to bottom, black 75%, transparent 100%)',
                            WebkitMaskImage: 'linear-gradient(to bottom, black 75%, transparent 100%)',
                        }}
                    />
                </div>

                {/* Very large and responsive text */}
                <div className="text-white/80 text-[10vw] font-bold text-center mb-4">
                    {t('switzerland')}
                </div>

                {/* Paragraph and button */}
                <div className='flex z-10'>
                    <div className="w-1/2 p-6 text-gray-800">
                        {/* Title using MUI Typography */}
                        <Typography variant="h4" component="h1" className="font-bold mb-4 text-start">
                            {t('switzerland-title')}
                        </Typography>

                        {/* Paragraph styled with Tailwind */}
                        <p className="text-lg leading-relaxed text-justify">
                            {t('switzerland-paragraph')}
                        </p>

                        <Fab variant="extended" onClick={() => handleScroll('tell-me-more')} className='gradient-fab'>
                            <ArrowCircleDownIcon sx={{ mr: 1 }} />
                            {t('more')}
                        </Fab>
                    </div>
                </div>

            </div>

            <div id='tell-me-more' className="p-6 relative z-10 flex">
                <div className='w-1/2'>
                    <img src='/images/flags/switzerland.webp' className='w-[60%] absolute -z-10 opacity-60' />
                </div>
                <div className='w-1/2 text-gray-900'>
                    {/* Title */}
                    <div className="text-white/80 text-[10vw] font-bold text-end mr-20 mb-4">
                        {t('origin-title')}
                    </div>

                    {/* Paragraph styled with Tailwind */}
                    <p className="text-lg leading-relaxed text-justify text-white">
                        {t('switzerland-origin')}
                    </p> 
                    

                    <div className='flex justify-end'>
                        <IconButton
                            className="bg-white rounded-full shadow-md animate-bounce p-3 hover:bg-violet-700"
                            style={{ width: '64px', height: '64px' }}
                        >
                            <ArrowDownwardIcon className="text-lightblue-500" />
                        </IconButton>
                    </div>
                </div>

            </div>


        </div>
    )
}

export default SpecialFlag