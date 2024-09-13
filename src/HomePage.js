import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import './HomePage.css';  // Import CSS for styling

const HomePage = ({ onSelectHeap }) => {
  // Animation for the title
  const titleSpring = useSpring({
    opacity: 1,
    transform: 'translateY(0)',
    from: { opacity: 0, transform: 'translateY(-50px)' },
    config: { tension: 220, friction: 120 },
  });

  // Animation for the buttons
  const buttonSpring = useSpring({
    opacity: 1,
    transform: 'translateY(0)',
    from: { opacity: 0, transform: 'translateY(50px)' },
    config: { tension: 220, friction: 120 },
    delay: 500,
  });

  return (
    <div className="homepage">
      <animated.h1 style={titleSpring} className="title">
        Play with Algorithms
      </animated.h1>
      <div className="button-container">
        <animated.button
          style={buttonSpring}
          className="heap-button"
          onClick={() => onSelectHeap('max')}
        >
          Max Heap
        </animated.button>
        <animated.button
          style={buttonSpring}
          className="heap-button"
          onClick={() => onSelectHeap('min')}
        >
          Min Heap
        </animated.button>
      </div>
    </div>
  );
};

export default HomePage;
