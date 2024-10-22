function partition(s: string): string[][] {
    const result: string[][] = [], path: string[] = [];
    const memo: boolean[][] = Array.from({ length: s.length }, () => Array(s.length).fill(false));

    for (let i = 0; i < s.length; i++) memo[i][i] = true;
    for (let i = 0; i < s.length - 1; i++) memo[i][i + 1] = s[i] === s[i + 1];

    for (let len = 3; len <= s.length; len++) {
        for (let start = 0; start <= s.length - len; start++) {
            const end = start + len - 1;
            memo[start][end] = s[start] === s[end] && memo[start + 1][end - 1];
        }
    }

    const backtrack = (start: number) => {
        if (start === s.length) {
            result.push([...path]);
            return;
        }
        for (let end = start; end < s.length; end++) {
            if (memo[start][end]) {
                path.push(s.substring(start, end + 1));
                backtrack(end + 1);
                path.pop();
            }
        }
    };

    backtrack(0);
    return result;
}
