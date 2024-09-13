import React, { useState } from 'react';
import MaxHeap from './MaxHeap'; // Import the MaxHeap class
import HeapTree from './HeapTree'; // Import the HeapTree component

const MaxHeapVisualizer = () => {
  const [heap, setHeap] = useState([]);
  const [inputValue, setInputValue] = useState("");

  // Create a single MaxHeap instance
  const maxHeap = React.useMemo(() => new MaxHeap(), []);

  // Add a new value to the heap
  const handlePush = () => {
    const value = parseInt(inputValue, 10);
    if (!isNaN(value)) {
      maxHeap.push(value); // Push to the MaxHeap instance
      setHeap([...maxHeap.heap]); // Update the state to trigger re-render
      setInputValue(""); // Clear the input field after pushing
    }
  };

  // Handle key press for Enter key
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handlePush();
    }
  };

  // Remove the max value from the heap
  const handlePop = () => {
    maxHeap.pop(); // Pop from the MaxHeap instance
    setHeap([...maxHeap.heap]); // Update the state to trigger re-render
  };

  return (
    <div className="visualizer">
      <h2>Max Heap Visualization</h2>
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

export default MaxHeapVisualizer;
