function maximumBags(capacities: number[], rocks: number[], additionalRocks: number): number {
  const leftSpaces = capacities
      .map((capacity, index) => capacity - rocks[index])
      .sort((a, b) => a - b);
      
  let cnt = 0;
  for(const neededRock of leftSpaces) {
      if (neededRock > additionalRocks) break;
      cnt++;
      additionalRocks -= neededRock;
  }
  return cnt;
}