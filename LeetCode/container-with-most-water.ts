let height: number[];
let leftIdx: number;
let rightIdx: number;
let maxSize: number;

function maxArea(_height: number[]): number {
    init(_height);
    while (leftIdx < rightIdx) {
        updateMaxSize();
        updateIdxs();
    }
    return maxSize;
}

function init(_height: number[]) {
    height = _height;
    leftIdx = 0;
    rightIdx = height.length - 1;
    maxSize = 0;
}

function updateMaxSize() {
    maxSize = Math.max(maxSize, getCurSize());
}

function getCurSize(): number {
    return (rightIdx - leftIdx) * Math.min(height[leftIdx], height[rightIdx]);
}

function updateIdxs() {
    if (height[leftIdx] > height[rightIdx]) rightIdx--;
    else leftIdx++;
}