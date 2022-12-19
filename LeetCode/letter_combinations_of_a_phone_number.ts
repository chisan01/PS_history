const lettersOfDigit = new Map([
  ["2", ["a", "b", "c"]],
  ["3", ["d", "e", "f"]],
  ["4", ["g", "h", "i"]],
  ["5", ["j", "k", "l"]],
  ["6", ["m", "n", "o"]],
  ["7", ["p", "q", "r", "s"]],
  ["8", ["t", "u", "v"]],
  ["9", ["w", "x", "y", "z"]]
]);

const ret: string[] = [];

function dfs(idx: number, digits: string, curCombination: string) {
  if(idx == digits.length) {
      ret.push(curCombination);
      return;
  }
  for (const letter of lettersOfDigit.get(digits.charAt(idx))) {
      dfs(idx + 1, digits, curCombination + letter);
  }
}

function letterCombinations(digits: string): string[] {
  if(digits.length === 0) return [];
  ret.length = 0;
  dfs(0, digits, "");
  return ret;
}