/**
 Do not return anything, modify nums in-place instead.
 */

 class Section {
  arr: number[];
  start: number;
  end: number

  constructor(arr: number[], start: number, end: number = arr.length - 1) {
      this.arr = arr;
      this.start = start;
      this.end = end;
  }
}

function nextPermutation(nums: number[]): void {
  const startIdxOfDescSubArr = getStartIdxOfDescSubArr(nums);

  if (startIdxOfDescSubArr > 0) {
      const curNumIdx = startIdxOfDescSubArr - 1;
      const nextNumIdx = findMinValueLargerThan(
          nums[curNumIdx],
          new Section(nums, startIdxOfDescSubArr)
      );
      if (nextNumIdx >= 0) swap(nums, nextNumIdx, curNumIdx);
  }
  sortToAsc(new Section(nums, startIdxOfDescSubArr));
}

function getStartIdxOfDescSubArr(arr: number[]): number {
  for (let i = arr.length - 1; i > 0; i--) {
      if (arr[i - 1] < arr[i]) return i;
  }
  return 0;
}

function findMinValueLargerThan(value: number, searchingSection: Section): number {
  const {arr, start, end}: {arr: number[], start: number, end: number} = searchingSection;
  for (let i = end; i >= start; i--) {
      if (arr[i] > value) return i;
  }
  return -1;
}

function swap(arr: number[], idx1: number, idx2: number): void {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}

function sortToAsc(sortingSection: Section): void {
  const {arr, start, end}: {arr: number[], start: number, end: number} = sortingSection;
  for (let i = start; i < end; i++) {
      let minValIdx = i;
      for (let j = i + 1; j <= end; j++) {
          if (arr[minValIdx] > arr[j]) minValIdx = j;
      }
      swap(arr, i, minValIdx);
  }
}