import React, { useState } from 'react';
import HomePage from './HomePage';
import MaxHeapVisualizer from './MaxHeapVisualizer';  // Assuming you have a MaxHeapVisualizer component
import MinHeapVisualizer from './MinHeapVisualizer';  // Assuming you have a MinHeapVisualizer component

const App = () => {
  const [selectedHeap, setSelectedHeap] = useState(null);

  const handleSelectHeap = (heapType) => {
    setSelectedHeap(heapType);
  };

  const renderHeapVisualizer = () => {
    if (selectedHeap === 'max') {
      return <MaxHeapVisualizer />;
    } else if (selectedHeap === 'min') {
      return <MinHeapVisualizer />;
    }
    return null;
  };

  return (
    <div className="App">
      {selectedHeap ? (
        renderHeapVisualizer()
      ) : (
        <HomePage onSelectHeap={handleSelectHeap} />
      )}
    </div>
  );
};

export default App;
