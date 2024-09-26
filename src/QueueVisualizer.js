import React, { useState } from 'react';
import Queue from './Queue'; // Ensure the path is correct
import QueueDisplay from './QueueDisplay'; // Assuming you have a QueueDisplay component

const QueueVisualizer = () => {
  const [queue, setQueue] = useState(new Queue());
  const [inputValue, setInputValue] = useState("");

  // Add a new value to the queue
  const handleEnqueue = () => {
    const value = parseInt(inputValue, 10);
    if (!isNaN(value)) {
      // Create a copy of the current queue
      const newQueue = new Queue();
      newQueue.items = [...queue.getQueue()]; // Copy current queue items
      newQueue.enqueue(value); // Enqueue new value
      setQueue(newQueue); // Update state with the new queue
      setInputValue(""); // Clear the input field after enqueueing
    }
  };

  // Handle key press for Enter key
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleEnqueue();
    }
  };

  // Remove the front value from the queue
  const handleDequeue = () => {
    if (!queue.isEmpty()) {
      const newQueue = new Queue();
      newQueue.items = [...queue.getQueue()]; // Copy current queue items
      newQueue.dequeue(); // Dequeue from the new queue instance
      setQueue(newQueue); // Update state with the new queue
    }
  };

  return (
    <div className="visualizer">
      <h2>Queue Visualization</h2>
      <div className="controls">
        <input 
          type="number" 
          value={inputValue} 
          onChange={(e) => setInputValue(e.target.value)} 
          onKeyDown={handleKeyDown} 
          placeholder="Enter a number"
        />
        <button onClick={handleEnqueue}>Enqueue</button>
        <button onClick={handleDequeue}>Dequeue</button>
      </div>
      <QueueDisplay queue={queue.getQueue()} />
    </div>
  );
};

export default QueueVisualizer;
