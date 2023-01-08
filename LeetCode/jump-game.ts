function canJump(nums: number[]): boolean {
  return new Solution(nums).canReachLastIdxWhenStartFrom(0);
}

class Solution {
  nums: number[];
  dp: Map<number, boolean>;

  constructor(nums: number[]) {
      this.nums = nums;
      this.dp = new Map();
  }

  canReachLastIdxWhenStartFrom(curIdx: number): boolean {
      if(curIdx === this.nums.length - 1) {
          return true;
      }
      if(this.dp.has(curIdx)) {
          return this.dp.get(curIdx);
      }

      this.dp.set(curIdx, false);
      for (let jumpDist = 1; jumpDist <= this.nums[curIdx]; jumpDist++) {
          if (!this.canReachLastIdxWhenStartFrom(curIdx + jumpDist)) {
              continue;
          }
          this.dp.set(curIdx, true);
          break;
      }
      return this.dp.get(curIdx);
  }
}