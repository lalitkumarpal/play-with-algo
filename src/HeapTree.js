import React, { useState, useEffect } from 'react';
import { useSprings, animated } from '@react-spring/web';

const HeapTree = ({ heap }) => {
  const svgWidth = 800;  // Width of the SVG canvas
  const nodeRadius = 20;  // Radius of each node

  // State to store temporary dragged positions
  const [draggedPositions, setDraggedPositions] = useState(Array(heap.length).fill(null));
  const [isDragging, setIsDragging] = useState(false);  // Track if dragging is in progress
  const [draggedIndex, setDraggedIndex] = useState(null);  // Track which node is being dragged

  // Calculate the original coordinates for each node in the binary heap
  const getCoordinates = (index) => {
    const level = Math.floor(Math.log2(index + 1));  // Calculate level in the tree
    const maxNodesAtLevel = Math.pow(2, level);      // Max nodes at this level
    const nodePosition = index - (maxNodesAtLevel - 1);  // Position of the node within its level

    // Horizontal spacing, placing the root in the center and children distributed
    const xSpacing = svgWidth / (maxNodesAtLevel + 1);
    const x = (nodePosition + 1) * xSpacing;

    // Vertical spacing between levels
    const y = 50 + level * 100;

    return { x, y };
  };

  // Function to handle mouse down (start dragging)
  const handleMouseDown = (index) => (event) => {
    setDraggedIndex(index);
    setIsDragging(true);
  };

  // Function to handle mouse move (dragging)
  const handleMouseMove = (event) => {
    if (!isDragging) return;

    const { clientX: x, clientY: y } = event;
    const newDraggedPositions = [...draggedPositions];
    newDraggedPositions[draggedIndex] = { x, y };  // Update the dragged position
    setDraggedPositions(newDraggedPositions);
  };

  // Function to handle mouse up (stop dragging)
  const handleMouseUp = () => {
    setIsDragging(false);
    setDraggedIndex(null);
  };

  // Function to reset dragged positions when a new node is added or removed
  useEffect(() => {
    setDraggedPositions(Array(heap.length).fill(null));  // Reset all dragged positions
  }, [heap]);

  // Define springs for node positions
  const springs = useSprings(
    heap.length,
    heap.map((value, index) => {
      const { x, y } = draggedPositions[index] || getCoordinates(index);  // Use dragged position or original
      return {
        cx: x,
        cy: y,
        config: { tension: 220, friction: 120 }
      };
    })
  );

  // Render the edges (lines) between parent and child nodes
  const renderEdges = () => {
    const edges = [];
    for (let i = 1; i < heap.length; i++) {
      const parentIndex = Math.floor((i - 1) / 2);  // Parent of the current node
      const { x: x1, y: y1 } = draggedPositions[parentIndex] || getCoordinates(parentIndex);  // Parent coordinates
      const { x: x2, y: y2 } = draggedPositions[i] || getCoordinates(i);  // Child coordinates
      edges.push(
        <line
          key={i}
          x1={x1} y1={y1} x2={x2} y2={y2}
          stroke="black"
          strokeWidth="2"
        />
      );
    }
    return edges;
  };

  return (
    <svg 
      width={svgWidth} 
      height="500"
      onMouseMove={handleMouseMove}  // Track mouse movement for dragging
      onMouseUp={handleMouseUp}      // Handle mouse up to stop dragging
    >
      {renderEdges()} {/* Render the edges between nodes */}
      {springs.map((spring, index) => (
        <g
          key={index}
          onMouseDown={handleMouseDown(index)}  // Start dragging on mouse down
          style={{ cursor: "move" }}
        >
          <animated.circle cx={spring.cx} cy={spring.cy} r={nodeRadius} fill="lightblue" />
          <animated.text x={spring.cx} y={spring.cy} textAnchor="middle" dy=".3em">{heap[index]}</animated.text>
        </g>
      ))}
    </svg>
  );
};

export default HeapTree;
