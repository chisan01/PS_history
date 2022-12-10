import java.util.PriorityQueue;

class Solution {
    public int solution(int n, int k, int[] enemy) {
        int numOfAttackedEnemy = 0;
        int numOfIgnoredEnemy = 0;
        PriorityQueue<Integer> largestEnemies = new PriorityQueue<>((a, b) -> a - b);

        for (int round = 1; round <= enemy.length; round++) {
            int numOfEnemyInThisRound = enemy[round - 1];
            numOfAttackedEnemy += numOfEnemyInThisRound;
            numOfIgnoredEnemy += numOfEnemyInThisRound;
            largestEnemies.add(numOfEnemyInThisRound);
            if(largestEnemies.size() > k && !largestEnemies.isEmpty()) {
                numOfIgnoredEnemy -= largestEnemies.poll();
            }
            if(numOfAttackedEnemy - numOfIgnoredEnemy > n) {
                return round - 1;
            }
        }
        return enemy.length;
    }
}