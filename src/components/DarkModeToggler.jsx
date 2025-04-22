import React from 'react'
import { useDarkMode } from '../context/ThemeContext'

export const DarkModeToggler = () => {
    const { darkMode, setDarkMode } = useDarkMode()
    return (
        <button
            className='px-6 py-2 bg-gray-200 rounded-md border hover:cursor-pointer dark:bg-white dark:text-black dark:border-white'
            onClick={() => {
                setDarkMode(!darkMode);
            }}
        >
            {darkMode ? (
                <div className='flex items-center'>
                    <img src='/moon.svg' alt='Dark Mode' className='w-5 h-5' />
                    <div className='pl-2'>
                        Dark Mode
                    </div>
                </div>
            ) : (
                <>

                    <div className='flex items-center'>
                        <img src='/day.svg' alt='Light Mode' className='w-5 h-5 ' />
                        <div className='pl-2'>
                            Light Mode
                        </div>
                    </div>
                </>
            )}
        </button>
    )
}
