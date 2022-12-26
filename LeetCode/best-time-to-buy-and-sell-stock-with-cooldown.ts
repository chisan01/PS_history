function maxProfit(prices: number[]): number {
  return new Solution(prices).result();
}

class Solution {
  private readonly prices: number[];
  private readonly dp: number[];

  constructor(prices: number[]) {
      this.prices = prices;
      this.dp = Array(prices.length + 1).fill(-1);
  }

  result(): number {
      return this.recur(0);
  }

  private recur(curDay: number): number {
      const isLastDay = curDay >= this.prices.length - 1;
      if(isLastDay) return 0;

      if(this.dp[curDay] != -1) return this.dp[curDay];

      const candidates = [this.recur(curDay + 1)];
      for (let sellDay = curDay + 1; sellDay < this.prices.length; sellDay++) {
          const profit = this.prices[sellDay] - this.prices[curDay];
          if(profit <= 0) continue;
          candidates.push(profit + this.recur(sellDay + 2));
      }
      this.dp[curDay] = Math.max(...candidates);
      return this.dp[curDay];
  }
}