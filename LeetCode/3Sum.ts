function threeSum(nums: number[]): number[][] {
    const map = new Map<number, number>();
    for (let k = 0; k < nums.length; k++) {
        map.set(nums[k], k);
    }

    const result = new Set<string>();
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            const sum = nums[i] + nums[j];
            if (!map.has(-sum)) continue;
            const k = map.get(-sum);
            if (k == i || k == j) continue;
            result.add(JSON.stringify([nums[i], nums[j], nums[k]].sort()));
        }
    }
    return Array.from(result).map(it => JSON.parse(it));
}