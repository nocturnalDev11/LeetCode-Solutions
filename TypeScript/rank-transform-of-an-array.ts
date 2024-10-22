function arrayRankTransform(arr: number[]): number[] {
    const rankMap = new Map<number, number>(
        Array.from(new Set(arr)).sort((a, b) => a - b).map((value, index) => [value, index + 1])
    );

    return arr.map(value => rankMap.get(value)!);
}
