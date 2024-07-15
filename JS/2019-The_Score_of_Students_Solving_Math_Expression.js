/**
 * @param {string} s
 * @param {number[]} answers
 * @return {number}
 */
var scoreOfStudents = function(s, answers) {
    function eval(s, first, last) {
        if (first === last) return parseInt(s[first]);
        let i = first + 1;
        while (i <= last && s[i] === '*') i += 2;
        if (i <= last) return eval(s, first, i - 1) + eval(s, i + 1, last);
        let ans = 1;
        for (let j = first; j <= last; j += 2) ans *= parseInt(s[j]);
        return ans;
    }

    let ans = 0;
    const N = s.length;
    const correct = eval(s, 0, N - 1);
    const dp = Array.from({ length: 32 }, () => Array.from({ length: 32 }, () => new Set()));

    for (let i = 0; i < N; i += 2) dp[i][i].add(parseInt(s[i]));

    for (let i = N - 3; i >= 0; i -= 2) {
        for (let j = i + 2; j < N; j += 2) {
            for (let k = i + 1; k < j; k += 2) {
                for (const a of dp[i][k - 1]) {
                    for (const b of dp[k + 1][j]) {
                        const val = s[k] === '+' ? a + b : a * b;
                        if (val <= 1000) dp[i][j].add(val);
                    }
                }
            }
        }
    }

    for (const n of answers) {
        if (n === correct) ans += 5;
        else if (dp[0][N - 1].has(n)) ans += 2;
    }

    return ans;
};
