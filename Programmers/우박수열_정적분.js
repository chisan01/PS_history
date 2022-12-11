function solution(k, ranges) {
  const prefixSum = [0];
  while (k > 1) {
      const prevHeight = k;
      const nextHeight = calNextHeight(k);
      const curSize = (prevHeight + nextHeight) / 2;
      prefixSum.push(prefixSum[prefixSum.length - 1] + curSize);
      k = nextHeight;
  }

  const result = [];
  for (const range of ranges) {
      const start = range[0];
      const end = prefixSum.length - 1 + range[1];
      if(start > end) result.push(-1);
      else result.push(prefixSum[end] - prefixSum[start]);
  }
  return result;
}

function calNextHeight(k) {
  if (k % 2 === 0) return k /= 2;
  else return k = k * 3 + 1;
}