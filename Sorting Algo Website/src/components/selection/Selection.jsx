import React, { useState } from 'react';
import './Selection.css';

export default function Selection() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [time, setTime] = useState();
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };
  async function handleSort() {
    const date1 = performance.now();
    const arr = JSON.parse(input);
  
    function swap(arr, i, j) {
      const temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          swap(arr, j, j + 1);
        }
      }
    }
  
    const str = JSON.stringify(arr);
    setOutput(str);
  
    const date2 = performance.now();
    const executionTime = (date2 - date1).toFixed(10);
    setTime(executionTime);
  }
  
  return (
    <div className="selection-container">
      <h1 className="selection-title">Selection Sort Visualizer</h1>
      <div className="selection-content">
        <div className="input-section">
          <h2>Input Array</h2>
          <input
            className="input-array"
            type='text'
            value={input}
            onChange={handleInputChange}
            placeholder="Enter numbers separated by commas [e.g., 5,2,8,12,1]"
          />
        </div>
        <button className="sort-button" onClick={handleSort}>
          Selection Sort Now
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
