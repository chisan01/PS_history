import java.util.HashMap;

class Solution {
    public int lengthOfLongestSubstring(String s) {
        int startIdx = 0;
        int ret = 0;
        HashMap<Character, Integer> lastAppearIdx = new HashMap<>();

        for (int i = 0; i < s.length(); i++) {
            char curCh = s.charAt(i);

            if(lastAppearIdx.containsKey(curCh)) {
                startIdx = Math.max(startIdx, lastAppearIdx.get(curCh) + 1);
            }
            lastAppearIdx.put(curCh, i);

            ret = Math.max(ret, i - startIdx + 1);
        }
        ret = Math.max(ret, s.length() - startIdx);
        return ret;
    }
}