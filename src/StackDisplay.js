import React from 'react';
import './StackDisplay.css'; // Import CSS for styling

const StackDisplay = ({ stack, topIndex }) => {
  return (
    <div className="stack-display">
      <h3>Current Stack:</h3>
      <div className="stack-container">
        {stack.length === 0 ? (
          <p>The stack is empty.</p>
        ) : (
          <>
            {stack.map((item, index) => (
              <div key={index} className="stack-item">
                {index === topIndex && <span className="arrow">&#x2192;</span>} {/* Left arrow for top item */}
                {item}
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default StackDisplay;
