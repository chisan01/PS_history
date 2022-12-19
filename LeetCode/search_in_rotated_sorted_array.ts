function search(nums: number[], target: number): number {
  return binarySearchWithOffset(nums, target, offsetOf(nums));
}

function binarySearchWithOffset(nums: number[], target: number, offset: number): number {
  let left = 0, right = nums.length - 1;
  while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      const realMidIdx = (mid + offset + nums.length) % nums.length;
      if (nums[realMidIdx] > target) right = mid - 1;
      else if (nums[realMidIdx] < target) left = mid + 1;
      else return realMidIdx;
  }
  return -1;
}

function offsetOf(nums: number[]) {
  let left = 0, right = nums.length - 1;
  while (left + 3 < right) {
      const mid = Math.floor((left + right) / 2);
      if (nums[mid] > nums[left]) left = mid;
      if (nums[mid] < nums[right]) right = mid;
  }
  for (let i = left + 1; i <= right; i++) {
      if (nums[i - 1] > nums[i]) return i;
  }
  return 0;
}