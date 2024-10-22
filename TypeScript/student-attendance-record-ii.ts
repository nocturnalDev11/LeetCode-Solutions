function checkRecord(n: number): number {
    const MOD = 1000000007;

    const dp = Array.from({ length: n + 1 }, () => 
        Array.from({ length: 2 }, () => 
            Array(3).fill(0)
        )
    );

    dp[0][0][0] = 1;

    for (let i = 1; i <= n; i++) {
        for (let absent = 0; absent < 2; absent++) {
            for (let late = 0; late < 3; late++) {
                dp[i][absent][0] = (dp[i][absent][0] + dp[i - 1][absent][late]) % MOD;
            }
        }

        for (let late = 0; late < 3; late++) {
            dp[i][1][0] = (dp[i][1][0] + dp[i - 1][0][late]) % MOD;
        }

        for (let absent = 0; absent < 2; absent++) {
            for (let late = 1; late < 3; late++) {
                dp[i][absent][late] = (dp[i][absent][late] + dp[i - 1][absent][late - 1]) % MOD;
            }
        }
    }

    let result = 0;
    for (let absent = 0; absent < 2; absent++) {
        for (let late = 0; late < 3; late++) {
            result = (result + dp[n][absent][late]) % MOD;
        }
    }

    return result;
}
