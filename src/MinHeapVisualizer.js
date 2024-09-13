import React, { useState } from 'react';
import MinHeap from './MinHeap'; // Import the MinHeap class
import HeapTree from './HeapTree'; // Import the HeapTree component

const MinHeapVisualizer = () => {
  const [heap, setHeap] = useState([]);
  const [inputValue, setInputValue] = useState("");

  // Create a single MinHeap instance
  const minHeap = React.useMemo(() => new MinHeap(), []);

  // Add a new value to the heap
  const handlePush = () => {
    const value = parseInt(inputValue, 10);
    if (!isNaN(value)) {
      minHeap.push(value); // Push to the MinHeap instance
      setHeap([...minHeap.heap]); // Update the state to trigger re-render
      setInputValue(""); // Clear the input field after pushing
    }
  };

  // Handle key press for Enter key
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handlePush();
    }
  };

  // Remove the min value from the heap
  const handlePop = () => {
    minHeap.pop(); // Pop from the MinHeap instance
    setHeap([...minHeap.heap]); // Update the state to trigger re-render
  };

  return (
    <div className="visualizer">
      <h2>Min Heap Visualization</h2>
      <div className="controls">
        <input 
          type="number" 
          value={inputValue} 
          onChange={(e) => setInputValue(e.target.value)} 
          onKeyDown={handleKeyDown} 
          placeholder="Enter a number"
        />
        <button onClick={handlePush}>Push</button>
        <button onClick={handlePop}>Pop</button>
      </div>
      <HeapTree heap={heap} />
    </div>
  );
};

export default MinHeapVisualizer;
