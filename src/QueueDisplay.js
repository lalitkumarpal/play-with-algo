import React from 'react';
import './QueueDisplay.css'; // Ensure you have this CSS file

const QueueDisplay = ({ queue, frontIndex }) => {
  return (
    <div className="queue-display">
      <h3>Current Queue:</h3>
      <div className="queue-container">
        {queue.length === 0 ? (
          <p>The queue is empty.</p>
        ) : (
          <>
            {queue.map((item, index) => (
              <div key={index} className="queue-item">
                {/* Only show the arrow for the front element */}
                {index === 0 && <span className="arrow">&#8594;</span>} {/* Right arrow for front element */}
                <span className="item-content">{item}</span>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default QueueDisplay;
