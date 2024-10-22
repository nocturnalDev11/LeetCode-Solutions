function canArrange(arr: number[], k: number): boolean {
    const remainderCount = new Array(k).fill(0);


    for (const num of arr) {
        const remainder = ((num % k) + k) % k;
        remainderCount[remainder]++;
    }


    if (remainderCount[0] % 2 !== 0) return false;

    for (let r = 1; r <= Math.floor(k / 2); r++) {
        if (remainderCount[r] !== remainderCount[k - r]) {
            return false;
        }
    }

    return true;
}
