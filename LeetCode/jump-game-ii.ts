function jump(nums: number[]): number {
  const jump = new Jump(nums);
  return jump.startAt(0);
}

class Jump {
  nums: number[];
  dp: number[];

  constructor(nums: number[]) {
      this.nums = nums;
      this.dp = Array(nums.length).fill(-1);
  }

  startAt(curPos: number): number {
      if(curPos === this.nums.length - 1) return 0;
      if(this.dp[curPos] !== -1) return this.dp[curPos];
      if(curPos + this.nums[curPos] >= this.nums.length - 1) return 1;

      const candidates: number[] = [];
      for (let j = 1; j <= this.nums[curPos]; j++) {
          const nextPos = curPos + j;
          candidates.push(this.startAt(nextPos) + 1);
      }
      this.dp[curPos] = Math.min(...candidates);
      return this.dp[curPos];
  }
}