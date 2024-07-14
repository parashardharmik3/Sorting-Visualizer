import React, { useState } from 'react';
import './Merge.css';

const Merge = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [time, setTime] = useState('');

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSort = () => {
    // Implement your Merge Sort algorithm here
    // Update setOutput with sorted output
    // Update setTime with sorting time
  };

  return (
    <div className="merge-container">
      <h1 className="merge-title">Merge Sort Visualizer</h1>
      <div className="merge-content">
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
          Merge Sort Now
        </button>
        <div className="info-section">
          <div className="info-card time-complexity">
            <h3>Time Complexity</h3>
            <p>O(n log n)</p>
          </div>
          <div className="info-card space-complexity">
            <h3>Space Complexity</h3>
            <p>O(n)</p>
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

export default Merge;

