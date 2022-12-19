function longestPalindrome(s: string): string {
  let ret = "";
  for (let i = 0; i < s.length; i++) {
      const candidate = longestPalindromeStartWith(s, i, i);
      if (ret.length < candidate.length) {
          ret = candidate;
      }

      if (i + 1 >= s.length) continue;
      const candidate2 = longestPalindromeStartWith(s, i, i + 1);
      if (ret.length < candidate2.length) {
          ret = candidate2;
      }
  }
  return ret;
}

function longestPalindromeStartWith(s: string, left: number, right: number): string {
  while (true) {
      if (left < 0 || right >= s.length || s[left] != s[right]) {
          left++;
          right--;
          break;
      }
      left--;
      right++;
  }
  return s.substring(left, right + 1);
}