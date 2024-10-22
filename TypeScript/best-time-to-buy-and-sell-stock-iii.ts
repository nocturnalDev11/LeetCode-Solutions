function maxProfit(prices: number[]): number {
    if (prices.length < 2) return 0;

    const n = prices.length;

    const dp: number[][][] = Array(n)
        .fill(0)
        .map(() =>
            Array(3)
                .fill(0)
                .map(() => Array(2).fill(-Infinity))
        );

    for (let k = 0; k <= 2; k++) {
        dp[0][k][0] = 0;
    }
    dp[0][1][1] = -prices[0];
    dp[0][2][1] = -prices[0];

    for (let i = 1; i < n; i++) {
        for (let k = 0; k <= 2; k++) {
            if (k === 0) {
                dp[i][k][0] = dp[i - 1][k][0];
            } else {
                dp[i][k][0] = Math.max(
                    dp[i - 1][k][0],
                    dp[i - 1][k][1] + prices[i]
                );

                dp[i][k][1] = Math.max(
                    dp[i - 1][k][1],
                    dp[i - 1][k - 1][0] - prices[i]
                );
            }
        }
    }

    return Math.max(0, dp[n - 1][1][0], dp[n - 1][2][0]);
}
