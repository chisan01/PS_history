function permute(nums: number[]): number[][] {
  return new Permutations(nums).getResult();
}

class Permutations {
  private readonly nums: number[];
  private readonly permutations: number[][];
  private readonly visited: boolean[];

  constructor(nums: number[]) {
      this.nums = nums;
      this.permutations = [];
      this.visited = Array(nums.length).fill(false);
      this.recur([]);
  }

  getResult(): number[][] {
      return this.permutations;
  }

  private recur(curPermutation: number[]) {
      if(curPermutation.length === this.nums.length) {
          this.permutations.push(curPermutation);
          return;
      }

      this.nums.forEach((value, index) => {
          if (this.visited[index]) return;

          this.visited[index] = true;
          this.recur([...curPermutation, value]);
          this.visited[index] = false;
      });
  }
}