function minStoneSum(piles: number[], k: number): number {
  const pq = new MyPriorityQueue(piles);
  for (let i = 0; i < k; i++) {
      const number = pq.poll();
      pq.push(number - Math.floor(number / 2));
  }
  return pq.sum();
}

class MyPriorityQueue {

  heap: number[];

  constructor(items: number[]) {
      this.heap = [];
      for(const item of items) {
          this.push(item);
      }
  }

  push(item: number): void {
      this.heap.push(item);
      let curIdx = this.heap.length - 1;
      while(curIdx !== 0) {
          const parentIdx = Math.floor((curIdx - 1) / 2);
          if(this.heap[parentIdx] >= this.heap[curIdx]) break;

          [this.heap[parentIdx], this.heap[curIdx]] = [this.heap[curIdx], this.heap[parentIdx]];
          curIdx = parentIdx;
      }
  }

  poll(): number {
      const ret = this.heap[0];
      this.heap[0] = this.heap[this.heap.length - 1];
      this.heap.length = this.heap.length - 1;

      let curIdx = 0;
      while (curIdx * 2 + 1 < this.heap.length) {
          let maxChildIdx = curIdx * 2 + 1;
          if ((curIdx * 2 + 2 < this.heap.length) && this.heap[curIdx * 2 + 2] > this.heap[maxChildIdx]) {
              maxChildIdx = curIdx * 2 + 2;
          }
          if(this.heap[maxChildIdx] <= this.heap[curIdx]) break;
          [this.heap[maxChildIdx], this.heap[curIdx]] = [this.heap[curIdx], this.heap[maxChildIdx]];
          curIdx = maxChildIdx;
      }
      return ret;
  }

  sum(): number {
      return this.heap.reduce((prev, cur) => prev + cur);
  }
}