import React, { useState } from 'react';
import './Bubble.css';

const Bubble = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [time, setTime] = useState('');

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSort = () => {
    const start = performance.now();
    const arr = JSON.parse(input);
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          // Swap elements
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }

    

    setOutput(JSON.stringify(arr));
    const end = performance.now(); 
    const sortingTime = (end - start).toFixed(10); 
    
  };

  return (
    <div className="bubble-container">
      <h1 className="bubble-title">Bubble Sort Visualizer</h1>
      <div className="bubble-content">
        <div className="input-section">
          <h2>Input Array</h2>
          <textarea
            className="input-array"
            value={input}
            onChange={handleInputChange}
            placeholder="Enter numbers separated by commas (e.g., 5,2,8,12,1)"
          />
        </div>
        <button className="sort-button" onClick={handleSort}>
          Bubble Sort Now
        </button>
        <div className="info-section">
          <div className="info-card time-complexity">
            <h3>Time Complexity</h3>
            <p>O(n²)</p>
          </div>
          <div className="info-card space-complexity">
            <h3>Space Complexity</h3>
            <p>O(1)</p>
          </div>
          <div className="info-card sorting-time">
            <h3>Sorting Time</h3>
            <p>{time}</p>
          </div>
        </div>
        <div className="output-section">
          <h2>Sorted Array</h2>
          <div className="output-array">{output}</div>
        </div>
      </div>
    </div>
  );
}

export default Bubble;

