let combinationsFor: Map<number, Set<number[]>>;

function combinationSum(candidates: number[], target: number): number[][] {
    combinationsFor = new Map<number, Set<number[]>>();
    return Array.from(recur(candidates, target));
}

function recur(candidates: number[], target: number): Set<number[]> {
    if (combinationsFor.has(target)) {
        return combinationsFor.get(target);
    }

    const combinations = new Set<string>();
    for (const candidate of candidates) {
        if(target - candidate < 0) {
            continue;
        }
        if(target - candidate === 0) {
            combinations.add(JSON.stringify([candidate]));
            continue;
        }
        const prevCombinations = recur(candidates, target - candidate);
        for (const prevCombination of prevCombinations) {
            const combination = [...prevCombination, candidate].sort();
            combinations.add(JSON.stringify(combination));
        }
    }

    const ret = new Set<number[]>();
    for (const c of combinations) {
        ret.add(JSON.parse(c));
    }
    combinationsFor.set(target, ret);
    return ret;
}