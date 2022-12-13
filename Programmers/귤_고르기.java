import java.util.*;

class Solution {
    public int solution(int k, int[] sizeOfTangerines) {
        HashMap<Integer, Integer> numOfFruitsWhichSizeIs = new HashMap<>();
        Arrays.stream(sizeOfTangerines)
                .forEach(size -> numOfFruitsWhichSizeIs.put(
                        size,
                        numOfFruitsWhichSizeIs.getOrDefault(size, 0) + 1
                ));

        PriorityQueue<Integer> pq = new PriorityQueue<>((a, b) -> b - a);
        pq.addAll(numOfFruitsWhichSizeIs.values());
        int result = 0, cnt = 0;
        for (; cnt < k; result++) {
            if (pq.isEmpty()) break;
            cnt += pq.poll();
        }
        return (cnt >= k) ? result : -1;
    }
}