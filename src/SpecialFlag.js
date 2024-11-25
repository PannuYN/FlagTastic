import { useTheme } from '@emotion/react';
import { Fab, IconButton, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PublicIcon from '@mui/icons-material/Public';
import LanguageIcon from '@mui/icons-material/Language'; // Example icon
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import FactCard from './components/FactCard';

function SpecialFlag(props) {
    //for reusable purpose
    const { special = "switzerland" } = props;
    const callString = (caption) => `${special}.${caption}`;

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

    //to handle click on fact circles
    // Use an array of booleans to track the clicked state for each icon
    const [clickedState, setClickedState] = useState([false, false, false, false]);
    // Handle click event for a specific index (icon)
    const handleClick = (index) => {
        const newState = [...clickedState]; //fetch values into a new state
        newState[index] = !newState[index]; //toggle the value of the clicked index
        setClickedState(newState); //set newstate values into original clickedstate
    };
    //for looping cards
    const facts = {
        icons: [<AccountBalanceIcon className="text-violet-900 text-5xl" />,
        <LanguageIcon className="text-violet-900 text-5xl" />,
        <AttachMoneyIcon className="text-violet-900 text-5xl" />,
        <PeopleAltIcon className="text-violet-900 text-5xl" />],
        types: ["capital", "language", "currency", "population"]
    };

    return (
        <div id="specialFlag">

            {/* Introduction */}
            <div className='flex flex-wrap justify-center relative mb-7'>

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

                {/* Very large and responsive title */}
                <div className="text-white/80 text-[10vw] font-bold text-center mb-3 mt-0 p-0">
                    {t(callString('name'))}
                </div>

                {/* Paragraph and button */}
                <div className='flex z-10 mx-3'>
                    <div className="w-1/2 p-3 text-gray-800">
                        {/* Title using MUI Typography */}
                        <Typography variant="h4" component="h1" className="font-bold mb-4 text-start">
                            {t(callString('title'))}
                        </Typography>

                        {/* Paragraph styled with Tailwind */}
                        <p className="text-lg leading-relaxed text-justify mb-3">
                            {t(callString('paragraph'))}
                        </p>

                        {/* Gradient animated button that scrolls down */}
                        <Fab variant="extended" onClick={() => handleScroll('tell-me-more')} className='gradient-fab'>
                            <ArrowCircleDownIcon sx={{ mr: 1 }} />
                            {t('more')}
                        </Fab>
                    </div>
                </div>{/* Paragraph and button ends here */}

            </div>
            {/* Introduction ends here */}

            {/* Flag originality */}
            <div id='tell-me-more' className="p-6 pt-0 relative z-10 flex">

                {/* Big flag image - stays in the back */}
                <div className='w-1/2'>
                    <img src='/images/flags/switzerland.webp' className='w-[60%] absolute -z-10 opacity-60' />
                </div>

                {/* Title, paragraph and button */}
                <div className='w-1/2 text-gray-900 p-0 m-0'>
                    {/* Large title */}
                    <div className="text-white/80 text-[10vw] font-bold text-end mr-16 mt-0 mb-2 p-0">
                        {t('origin-title')}
                    </div>

                    {/* Paragraph styled with Tailwind */}
                    <p className="text-lg leading-relaxed text-justify text-white mb-5">
                        {t(callString('origin'))}
                    </p>

                    {/* Bouncing up button that scrolls down */}
                    <div className='flex justify-end'>
                        <IconButton
                            className="bg-white rounded-full shadow-md animate-bounce p-3 group hover:bg-violet-700"
                            style={{ width: '64px', height: '64px' }}
                            onClick={() => handleScroll('facts-and-info')}
                        >
                            <ArrowDownwardIcon className="text-violet-700 group-hover:text-white transition-colors" />
                        </IconButton>
                    </div>

                </div>{/* Title, paragraph and button ends here */}

            </div>
            {/* Flag originality ends here */}

            {/* Facts and Info */}
            <div id='facts-and-info' className='flex relative justify-center m-4 mr-0'>
                {/* Image in the back */}
                <div className='absolute'>
                    <div className="relative inset-0 w-full h-full">
                        <img src='/images/switzerland/facts-img1.jpg' className='w-2/3 opacity-80 -z-10 ml-auto'
                            style={{
                                maskImage: `linear-gradient(to left, black 40%, transparent), linear-gradient(to top, black 40%, transparent)`,
                                WebkitMaskImage: `linear-gradient(to left, black 40%, transparent), linear-gradient(to top, black 40%, transparent)`,
                                maskComposite: 'intersect',
                                WebkitMaskComposite: 'intersect',
                            }}

                        />
                        {/* Button that scrolls down at the bottom right */}
                        <div className='flex absolute bottom-5 right-7'>
                            <IconButton
                                className="bg-violet-900 rounded-full shadow-md p-3 group hover:bg-violet-200"
                                style={{ width: '64px', height: '64px' }}
                                onClick={() => handleScroll('home-page-section')}
                            >
                                <ArrowUpwardIcon className="text-white group-hover:text-black transition-colors" />
                            </IconButton>
                        </div>
                    </div>
                </div>


                <div className='flex flex-col z-10 py-3 w-full items-start'>
                    {/* Large title */}
                    <div className='flex m-2 items-center'>
                        <div className="text-slate-100/80 text-[6vw] font-geist text-end mx-6 mt-0 mb-2 p-0">
                            {t('facts')}
                        </div>
                        <ArrowForwardIcon sx={{ fontSize: '5vw' }} className='text-violet-900/80 mt-2' />
                        <div className="text-white text-[4vw] font-mono font-bold text-end mx-6 mt-1 mb-2 p-3 rounded-lg bg-gradient-to-r from-transparent to-violet-500 opacity-60">
                            {t('quick-and-fun')}
                        </div>
                    </div>

                    {/* Facts */}
                    <div className='w-full my-4 px-5 flex justify-center gap-5 mt-10'>
                        {facts.icons.map((IconComponent, index) => (
                            <div key={index} className="relative" onClick={() => handleClick(index)}>
                                {/* Icon Circle */}
                                <div className="m-5 w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-40 lg:h-40 bg-white/30 backdrop-blur-md rounded-full shadow-2xl flex items-center justify-center hover:bg-white/40 hover:scale-105 hover:-translate-y-2 transition-all duration-300 ease-in-out">
                                    {IconComponent}
                                </div>

                                {/* FactCard with Smooth Zoom In/Out */}
                                {clickedState[index] && (
                                    <div className="absolute top-0 left-0 z-30 w-full h-full flex items-center justify-center transition-all duration-900 ease-in-out">
                                        <FactCard type={facts.types[index]} country={special} /> {/* Pass the corresponding type */}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                </div>


            </div>
        </div>
    )
}

export default SpecialFlag