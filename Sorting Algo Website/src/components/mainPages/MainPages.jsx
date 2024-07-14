import React from 'react'
import './MainPages.css'
import {useNavigate} from 'react-router-dom'

function MainPages() {
  const navigate = useNavigate();

  const sortingAlgorithms = [
    { name: 'Selection Sort', path: '/Selection Sort' },
    { name: 'Bubble Sort', path: '/Bubble Sort' },
    { name: 'Insertion Sort', path: '/Insertion Sort' },
    { name: 'Merge Sort', path: '/Merge Sort' },
    { name: 'Quick Sort', path: '/Quick Sort' }
  ];

  return (
    <div className='mainpage'>
      <div className='content-wrapper'>
        <h1 className='header'>Sorting Algorithms Visualizer</h1>
        <p className='subheader'>Explore and understand different sorting techniques</p>
        <div className='button-container'>
          {sortingAlgorithms.map((algo, index) => (
            <button 
              key={index} 
              className='btn' 
              onClick={() => navigate(algo.path)}
            >
              {algo.name}
              <span className='btn-bg'></span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MainPages