import { useState } from 'react'
import './App.css'
import GameCanvas from './GameCanvas'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BasicResume } from './Basic/BasicResume';
import { NotFound } from './NotFound';

function App() {
    return (
      <BrowserRouter>
        <Routes>
            <Route path="/">
                <Route path='/basic' element={<BasicResume />}/>
                <Route path='2d' element={<GameCanvas />} />
                <Route path='*' element={<NotFound />} />
            </Route>
        </Routes>
      </BrowserRouter>
    )

}

export default App
