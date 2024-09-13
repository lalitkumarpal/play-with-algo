class MaxHeap {
    constructor() {
      this.heap = [];
    }
  
    // Push an element into the heap and restructure
    push(value) {
      this.heap.push(value);
      this.heapifyUp(this.heap.length - 1);
    }
  
    // Pop the max element (root) and restructure
    pop() {
      if (this.heap.length === 0) return null;
      const max = this.heap[0];
      if (this.heap.length === 1) {
        this.heap.pop();
      } else {
        this.heap[0] = this.heap.pop();
        this.heapifyDown(0);
      }
      return max;
    }
  
    // Restore the heap order after insertion
    heapifyUp(index) {
      let currentIndex = index;
      let parentIndex = Math.floor((currentIndex - 1) / 2);
  
      while (currentIndex > 0 && this.heap[currentIndex] > this.heap[parentIndex]) {
        [this.heap[currentIndex], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[currentIndex]];
        currentIndex = parentIndex;
        parentIndex = Math.floor((currentIndex - 1) / 2);
      }
    }
  
    // Restore the heap order after removal
    heapifyDown(index) {
      let currentIndex = index;
      const length = this.heap.length;
      let leftChildIndex = 2 * currentIndex + 1;
      let rightChildIndex = 2 * currentIndex + 2;
      let largest = currentIndex;
  
      if (leftChildIndex < length && this.heap[leftChildIndex] > this.heap[largest]) {
        largest = leftChildIndex;
      }
  
      if (rightChildIndex < length && this.heap[rightChildIndex] > this.heap[largest]) {
        largest = rightChildIndex;
      }
  
      if (largest !== currentIndex) {
        [this.heap[currentIndex], this.heap[largest]] = [this.heap[largest], this.heap[currentIndex]];
        this.heapifyDown(largest);
      }
    }
  }
  
  export default MaxHeap;
  