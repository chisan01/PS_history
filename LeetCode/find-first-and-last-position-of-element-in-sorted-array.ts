function searchRange(nums: number[], target: number): number[] {
  if(!isExist(nums, target)) return [-1, -1];
  const left = idxOfMaxNumLessThan(nums, target) + 1;
  const right = idxOfMinNumGreaterThan(nums, target) - 1;
  return [left, right];
}

function isExist(nums: number[], target: number): boolean {
  let left = 0, right = nums.length - 1;
  while (left <= right) {
      const mid = Math.ceil((left + right) / 2);
      if (nums[mid] < target) left = mid + 1;
      else if(nums[mid] > target) right = mid - 1;
      else return true;
  }
  return false;
}

function idxOfMaxNumLessThan(nums: number[], target: number): number {
  let left = 0, right = nums.length - 1;
  while (left < right) {
      const mid = Math.ceil((left + right) / 2);
      if (nums[mid] >= target) right = mid - 1;
      else left = mid;
  }
  if(nums[right] === target) {
      right--;
  }
  return right;
}

function idxOfMinNumGreaterThan(nums: number[], target: number): number {
  let left = 0, right = nums.length - 1;
  while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (nums[mid] <= target) left = mid + 1;
      else right = mid;
  }
  if(nums[left] === target) {
      left++;
  }
  return left;
}