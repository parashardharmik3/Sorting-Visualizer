import React, { useState } from 'react';
import './Insertion.css';

const Insertion = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [time, setTime] = useState('');

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  async function handleSort() {
    const date1 = performance.now();
    const arr = JSON.parse(`[${input}]`);
  
    for (let i = 1; i < arr.length; i++) {
      let key = arr[i];
      let j = i - 1;
      while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
        j--;
      }
      arr[j + 1] = key;
    }
  
    const str = JSON.stringify(arr);
    setOutput(str);
  
    const date2 = performance.now();
    const executionTime = (date2 - date1).toFixed(10);
    setTime(executionTime);
  }
  

  return (
    <div className="insertion-container">
      <h1 className="insertion-title">Insertion Sort Visualizer</h1>
      <div className="insertion-content">
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
          Insertion Sort Now
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

export default Insertion;
