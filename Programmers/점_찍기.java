class Solution {

  int k, d;

  private double distanceFromZeroPoint(int y, int x) {
      long lenOfY = (long) y * k;
      long lenOfX = (long) x * k;
      return Math.sqrt(lenOfY * lenOfY + lenOfX * lenOfX);
  }

  private boolean isPossible(int y, int x) {
      return distanceFromZeroPoint(y, x) <= d;
  }

  public long solution(int k, int d) {
      this.k = k;
      this.d = d;
      int numOfDotsInSide = d / k + 1;

      long result = 0;
      int x = numOfDotsInSide - 1;
      for (int y = 0; y < numOfDotsInSide; y++) {
          while (!isPossible(y, x)) {
              x--;
          }
          result += x + 1;
      }
      return result;
  }
}