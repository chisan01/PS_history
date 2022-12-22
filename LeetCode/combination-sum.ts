function combinationSum(candidates: number[], target: number): number[][] {
    const combinationSum = new CombinationSum(candidates);
    return combinationSum.getCombinationsFor(target);
}

class CombinationSum {
    combinationsFor: Map<number, number[][]>;
    candidates: number[];

    constructor(candidates: number[]) {
        this.combinationsFor = new Map<number, number[][]>();
        this.candidates = candidates;
    }

    getCombinationsFor(target: number): number[][] {
        if (this.combinationsFor.has(target)) {
            return this.combinationsFor.get(target);
        }
        const combinations = this.getAllCombinationsFor(target);
        const distinctCombinations = distinct(combinations);
        this.combinationsFor.set(target, distinctCombinations);
        return distinctCombinations;
    }

    private getAllCombinationsFor(target: number): number[][] {
        const combinations: number[][] = [];
        this.candidates.forEach(candidate => {
            if (candidate === target) {
                combinations.push([candidate]);
            }
            if (candidate >= target) {
                return;
            }
            const nextTarget = target - candidate;
            const combinationsOfNextTarget = this.getCombinationsFor(nextTarget);
            combinationsOfNextTarget
                .map(value => [...value, candidate])
                .forEach(value => combinations.push(value));
        });
        return combinations;
    }
}

function distinct(nums: number[][]): number[][] {
    const distinctSet = new Set([...nums].map(value => JSON.stringify(value.sort())));
    return [...distinctSet].map(value => JSON.parse(value));
}