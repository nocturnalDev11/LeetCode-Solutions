function myPow(x: number, n: number): number {
    if (n === 0) return 1;

    if (n < 0) {
        x = 1 / x;
        n = -n;
    }

    const half = myPow(x, Math.floor(n / 2));

    if (n % 2 === 0) {
        return half * half;
    } else {
        return half * half * x;
    }
}

console.log(myPow(2.00000, 10));
console.log(myPow(2.10000, 3));
console.log(myPow(2.00000, -2));
