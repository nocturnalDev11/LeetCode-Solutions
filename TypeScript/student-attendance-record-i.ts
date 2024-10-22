function checkRecord(s: string): boolean {
    let absentCount = 0, lateStreak = 0;

    for (let char of s) {
        if (char === 'A') {
            absentCount++;
            if (absentCount >= 2) return false;
        }
        
        if (char === 'L') {
            lateStreak++;
            if (lateStreak >= 3) return false;
        } else {
            lateStreak = 0;
        }
    }

    return true;
}
