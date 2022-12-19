function generateParenthesis(n: number): string[] {
    return ParenthesisGenerator.generateNumOfPairIs(n);
}

class ParenthesisGenerator {
    private readonly numOfPairs: number;
    private result: string[];

    static generateNumOfPairIs(numOfPairs: number): string[] {
        return new ParenthesisGenerator(numOfPairs).result;
    }

    private constructor(numOfPairs: number) {
        this.numOfPairs = numOfPairs;
        this.result = [];
        this.backtracking("", 0, 0);
    }

    private backtracking(curPairs: string, openBracketCnt: number, closeBracketCnt: number) {
        if (curPairs.length == this.numOfPairs * 2) this.result.push(curPairs);
        if (openBracketCnt < this.numOfPairs) {
            this.backtracking(curPairs + "(", openBracketCnt + 1, closeBracketCnt);
        }
        if (closeBracketCnt < openBracketCnt) {
            this.backtracking(curPairs + ")", openBracketCnt, closeBracketCnt + 1);
        }
    }
}