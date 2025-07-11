function minChanges(s: string): number {
    let changes = 0;
    
    for (let i = 0; i < s.length; i += 2) {
        if (s[i] !== s[i + 1]) {
            changes++;
        }
    }
    
    return changes;
}
