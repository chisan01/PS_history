function numTilings(n: number): number {
  return new Solution(n).getResult();
}

const MOD = 1000000007;

class Solution {
  private readonly n: number;
  private readonly baseCase: number[];
  private readonly dp: number[];

  constructor(n: number) {
      this.n = n;
      this.baseCase = [0, 1, 1];
      for (let i = 3; i <= n; i++) {
          this.baseCase.push(2);
      }
      this.dp = Array(n + 1).fill(-1);
  }

  getResult(): number {
      return this.f(this.n);
  }

  private f(n: number): number {
      if (n === 0) return 1;
      if (this.dp[n] !== -1) return this.dp[n];

      let ret = 0;
      for (let i = 0; i < n; i++) {
          ret += this.baseCase[n - i] * this.f(i) % MOD;
      }
      this.dp[n] = ret % MOD;
      return this.dp[n];
  }
}