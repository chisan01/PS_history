function combinationSum(candidates: number[], target: number): number[][] {
    const combinationSum = new CombinationForSum(candidates);
    return combinationSum.getCombinations(target);
}

class CombinationForSum {
    combinationsWhichSumIs: Map<number, number[][]>;
    candidateNums: number[];

    constructor(candidates: number[]) {
        this.combinationsWhichSumIs = new Map<number, number[][]>();
        this.candidateNums = candidates;
    }

    getCombinations(sum: number): number[][] {
        if (!this.combinationsWhichSumIs.has(sum)) {
            const combinations = this.calDistinctCombinations(sum);
            this.combinationsWhichSumIs.set(sum, combinations);
        }
        return this.combinationsWhichSumIs.get(sum);
    }

    private calDistinctCombinations(sum: number): number[][] {
        const combinations = this.calCombinations(sum);
        return removeDuplicates(combinations);
    }

    private calCombinations(sum: number): number[][] {
        const combinations: number[][] = [];
        this.candidateNums.forEach(curNum => {
            if (curNum === sum) {
                combinations.push([curNum]);
            }
            if (curNum >= sum) {
                return;
            }
            this.getCombinations(sum - curNum)
                .map(prevCombination => [...prevCombination, curNum])
                .forEach(curCombination => combinations.push(curCombination));
        });
        return combinations;
    }
}

function removeDuplicates(nums: number[][]): number[][] {
    const distinctSet = new Set([...nums].map(value => JSON.stringify(value.sort())));
    return [...distinctSet].map(value => JSON.parse(value));
}