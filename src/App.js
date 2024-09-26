import React, { useState } from 'react';
import HomePage from './HomePage';
import MaxHeapVisualizer from './MaxHeapVisualizer';  
import MinHeapVisualizer from './MinHeapVisualizer';  
import StackVisualizer from './StackVisualizer'; // Assuming you have a StackVisualizer component
import QueueVisualizer from './QueueVisualizer'; // Add the QueueVisualizer import

const App = () => {
  const [selectedHeap, setSelectedHeap] = useState(null);

  const handleSelectHeap = (heapType) => {
    setSelectedHeap(heapType); // Set the selectedHeap state based on button click
  };

  const renderVisualizer = () => {
    switch (selectedHeap) {
      case 'max':
        return <MaxHeapVisualizer />;
      case 'min':
        return <MinHeapVisualizer />;
      case 'stack':
        return <StackVisualizer />;
      case 'queue':
        return <QueueVisualizer />;
      default:
        return null; // Return null if no visualizer is selected
    }
  };

  return (
    <div className="App">
      {selectedHeap ? (
        renderVisualizer() // Render the selected visualizer
      ) : (
        <HomePage onSelectHeap={handleSelectHeap} />
      )}
    </div>
  );
};

export default App;
