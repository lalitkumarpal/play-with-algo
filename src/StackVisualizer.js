import React, { useState } from 'react';
import Stack from './Stack'; // Import the Stack class
import StackDisplay from './StackDisplay'; // Import the StackDisplay component

const StackVisualizer = () => {
  const [stack, setStack] = useState([]);
  const [inputValue, setInputValue] = useState("");

  // Create a single Stack instance
  const stackInstance = React.useMemo(() => new Stack(), []);

  // Add a new value to the stack
  const handlePush = () => {
    const value = inputValue.trim();
    if (value) {
      stackInstance.push(value); // Push to the Stack instance
      setStack([...stackInstance.items]); // Update the state to trigger re-render
      setInputValue(""); // Clear the input field after pushing
    }
  };

  // Handle key press for Enter key
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handlePush();
    }
  };

  // Remove the top value from the stack
  const handlePop = () => {
    if (stack.length > 0) {
      stackInstance.pop(); // Pop from the Stack instance
      setStack([...stackInstance.items]); // Update the state to trigger re-render
    }
  };

  const topIndex = stack.length - 1; // Index of the top item

  return (
    <div className="visualizer">
      <h2>Stack Visualization</h2>
      <div className="controls">
        <input 
          type="text" 
          value={inputValue} 
          onChange={(e) => setInputValue(e.target.value)} 
          onKeyDown={handleKeyDown} 
          placeholder="Enter a value"
        />
        <button onClick={handlePush}>Push</button>
        <button onClick={handlePop}>Pop</button>
      </div>
      <StackDisplay stack={stack} topIndex={topIndex} />
    </div>
  );
};

export default StackVisualizer;
