function generateParenthesis(n: number): string[] {
  if(n == 1) return ["()"];
  const result: string[] = [];
  result.push(...calNextSizeOf(generateParenthesis(n - 1)));
  for (let i = 1; i < n; i++) {
      result.push(...combine(generateParenthesis(n - i), generateParenthesis(i)));
  }
  return Array.from(new Set(result));
}

function calNextSizeOf(prevParenthesisSet: string[]): string[] {
  const set = new Set<string>();
  for (const parenthesis of prevParenthesisSet) {
      set.add(`(${parenthesis})`);
  }
  return Array.from(set);
}

function combine(setA: string[], setB: string[]): string[] {
  const set = new Set<string>();
  for (const a of setA) {
      for (const b of setB) {
          set.add(a + b);
      }
  }
  return Array.from(set);
}