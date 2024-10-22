function digitSum(s: string, k: number): string {
    while (s.length > k) {
        let newS = "";

        for (let i = 0; i < s.length; i += k) {
            let group = s.slice(i, i + k);
            let sum = 0;

            for (let char of group) {
                sum += parseInt(char);
            }

            newS += sum.toString();
        }

        s = newS;
    }
    
    return s;
}
