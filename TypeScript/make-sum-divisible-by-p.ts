function minSubarray(nums: number[], p: number): number {
    const totalSum = nums.reduce((a, b) => a + b, 0);
    const targetRemainder = totalSum % p;

    if (targetRemainder === 0) return 0;

    if (totalSum < p) return -1;

    const prefixSumMap = new Map<number, number>();
    prefixSumMap.set(0, -1);

    let currentPrefixSum = 0;
    let minLength = Infinity;

    for (let i = 0; i < nums.length; i++) {
        currentPrefixSum = (currentPrefixSum + nums[i]) % p;

        const neededPrefixSum = (currentPrefixSum - targetRemainder + p) % p;

        if (prefixSumMap.has(neededPrefixSum)) {
            const index = prefixSumMap.get(neededPrefixSum)!;
            minLength = Math.min(minLength, i - index);
        }

        prefixSumMap.set(currentPrefixSum, i);
    }

    return minLength === Infinity || minLength === nums.length ? -1 : minLength;
}
