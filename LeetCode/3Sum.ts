class Pair {
  idx1: number;
  idx2: number;
  sum: number;

  constructor(idx1: number, idx2: number, sum: number) {
      this.idx1 = idx1;
      this.idx2 = idx2;
      this.sum = sum;
  }
}

function threeSum(nums: number[]): number[][] {
  let pairsWhichSumIs = new Map<number, Set<Pair>>();
  for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
          const curPair = new Pair(i, j, nums[i] + nums[j]);
          if(!pairsWhichSumIs.has(curPair.sum)) pairsWhichSumIs.set(curPair.sum, new Set());
          const pairsWithSameSum = pairsWhichSumIs.get(curPair.sum);
          pairsWithSameSum.add(curPair);
          pairsWhichSumIs.set(curPair.sum, pairsWithSameSum);
      }
  }
  const result: Set<string> = new Set();
  for (let i = 0; i < nums.length; i++) {
      if(!pairsWhichSumIs.has(-nums[i])) continue;
      for (const candidatePair of pairsWhichSumIs.get(-nums[i])) {
          if(candidatePair.idx1 == i || candidatePair.idx2 == i) continue;
          result.add(JSON.stringify([nums[i], nums[candidatePair.idx1], nums[candidatePair.idx2]].sort()));
      }
  }
  return Array.from(result).map(it => JSON.parse(it));
}