function generateParenthesis(n: number): string[] {
    const results: string[] = [];

    const backtrack = (current: string, open: number, close: number) => {
        if (current.length === 2 * n) {
            results.push(current);
            return;
        }
        
        if (open < n) {
            backtrack(current + '(', open + 1, close);
        }
        if (close < open) {
            backtrack(current + ')', open, close + 1);
        }
    };

    backtrack('', 0, 0);
    return results;
}
