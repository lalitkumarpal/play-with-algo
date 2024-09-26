import React from 'react';
import './HomePage.css'; // Import the CSS file for styling

const HomePage = ({ onSelectHeap }) => {
  return (
    <div className="home-page">
      <h1 className="title">Play with Algorithms</h1>
      <div className="buttons">
        <button onClick={() => onSelectHeap('max')}>Max Heap</button>
        <button onClick={() => onSelectHeap('min')}>Min Heap</button>
        <button onClick={() => onSelectHeap('stack')}>Stack</button>
        <button onClick={() => onSelectHeap('queue')}>Queue</button> {/* Queue Button */}
      </div>
    </div>
  );
};

export default HomePage;
