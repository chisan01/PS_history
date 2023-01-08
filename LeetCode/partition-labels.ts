function partitionLabels(s: string): number[] {
    const lastIdxOf = new Map<string, number>();
    for (let i = 0; i < s.length; i++) {
        lastIdxOf.set(s.charAt(i), i);
    }

    const sizeOfParts: number[] = [];
    for (let partStartIdx = 0; partStartIdx < s.length; partStartIdx++) {
        let partLastIdx = lastIdxOf.get(s.charAt(partStartIdx));
        for (let i = partStartIdx; i <= partLastIdx; i++) {
            if(lastIdxOf.get(s.charAt(i)) > partLastIdx) {
                partLastIdx = lastIdxOf.get(s.charAt(i));
            }
        }
        sizeOfParts.push(partLastIdx - partStartIdx + 1);
        partStartIdx = partLastIdx;
    }
    return sizeOfParts;
}