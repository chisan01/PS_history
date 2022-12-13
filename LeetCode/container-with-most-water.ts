class Point {
  idx: number;
  height: number;

  constructor(idx: number, height: number) {
      this.idx = idx;
      this.height = height;
  }
}

let ret: number;
let startPointCandidates: Point[];
let startPoint: Point;

function candidateExists(): boolean {
  return startPointCandidates.length !== 0
}

function maxArea(height: number[]): number {
  init(height);
  height.forEach((curHeight, curIdx) => {
      const curPoint = checkPoint(curIdx, curHeight);
      if (startPoint.height >= curPoint.height) return;
      updateStartPoint(curPoint);
  })
  return ret;
}

function init(height: number[]) {
  ret = 0;
  startPoint = new Point(0, height[0]);
  startPointCandidates = [];
}

function checkPoint(idx: number, height: number) {
  const curPoint = new Point(idx, height);
  ret = Math.max(ret, calSizeOf(startPoint, curPoint));
  if (curPoint.height > startPoint.height) {
      startPointCandidates.push(curPoint);
  }
  return curPoint;
}

function updateStartPoint(curPoint: Point) {
  for (let candidate of startPointCandidates) {
      const candidateSize = calSizeOf(candidate, curPoint);
      if (ret > candidateSize) continue;
      startPoint = candidate;
      ret = candidateSize;
  }
}

function calSizeOf(startPoint: Point, endPoint: Point): number {
  if (startPoint.idx > endPoint.idx) return calSizeOf(endPoint, startPoint);
  return (endPoint.idx - startPoint.idx) * Math.min(startPoint.height, endPoint.height);
}