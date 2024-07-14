import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainPages from './components/mainPages/MainPages'
import Selection from './components/selection/Selection'
import Bubble from './components/bubble/Bubble'
import Insertion from './components/insertion/Insertion'
import Merge from './components/merge/Merge'
import Quick from './components/quick/Quick'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPages />} />
        <Route path="/Selection Sort" element={<Selection/>} />
        <Route path="/Bubble Sort" element={<Bubble/>} />
        <Route path="/Insertion Sort" element={<Insertion/>} />
        <Route path="/Merge Sort" element={<Merge/>} />
        <Route path="/Quick Sort" element={<Quick/>} />
      </Routes>
    </Router>
  )
}

export default App
