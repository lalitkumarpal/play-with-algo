class MinHeap {
    constructor() {
      this.heap = [];
    }
  
    // Helper method to swap elements
    swap(index1, index2) {
      [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
    }
  
    // Helper method to get the index of the parent
    getParentIndex(index) {
      return Math.floor((index - 1) / 2);
    }
  
    // Helper method to get the index of the left child
    getLeftChildIndex(index) {
      return 2 * index + 1;
    }
  
    // Helper method to get the index of the right child
    getRightChildIndex(index) {
      return 2 * index + 2;
    }
  
    // Helper method to heapify up
    heapifyUp(index) {
      const parentIndex = this.getParentIndex(index);
      if (index > 0 && this.heap[index] < this.heap[parentIndex]) {
        this.swap(index, parentIndex);
        this.heapifyUp(parentIndex);
      }
    }
  
    // Helper method to heapify down
    heapifyDown(index) {
      const leftChildIndex = this.getLeftChildIndex(index);
      const rightChildIndex = this.getRightChildIndex(index);
      let smallest = index;
  
      if (leftChildIndex < this.heap.length && this.heap[leftChildIndex] < this.heap[smallest]) {
        smallest = leftChildIndex;
      }
  
      if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] < this.heap[smallest]) {
        smallest = rightChildIndex;
      }
  
      if (smallest !== index) {
        this.swap(index, smallest);
        this.heapifyDown(smallest);
      }
    }
  
    // Add a value to the heap
    push(value) {
      this.heap.push(value);
      this.heapifyUp(this.heap.length - 1);
    }
  
    // Remove the minimum value from the heap
    pop() {
      if (this.heap.length === 0) return null;
      if (this.heap.length === 1) return this.heap.pop();
      
      const min = this.heap[0];
      this.heap[0] = this.heap.pop();
      this.heapifyDown(0);
      return min;
    }
  
    // Get the minimum value from the heap
    peek() {
      return this.heap[0] || null;
    }
  }
  
  export default MinHeap;
  