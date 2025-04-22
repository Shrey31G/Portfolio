import { useState } from 'react'
import './App.css'
import GameCanvas from './GameCanvas'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BasicResume } from './Basic/BasicResume';
import { NotFound } from './NotFound';
import { Home } from './Home';
import { ThemeProvider } from './context/ThemeContext';

export const App = () => {
    return (
        <BrowserRouter>
            <ThemeProvider >

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path='/basic' element={<BasicResume />} />
                    <Route path='/2d' element={<GameCanvas />} />
                    <Route path='/*' element={<NotFound />} />
                </Routes>
                
            </ThemeProvider>
        </BrowserRouter>
    )

}

export default App
