function dividePlayers(skill: number[]): number {
    const n = skill.length;
    const totalSum = skill.reduce((sum, s) => sum + s, 0);
    
    if (totalSum % (n / 2) !== 0) return -1;
    
    const targetSkill = totalSum / (n / 2);
    skill.sort((a, b) => a - b);
    
    let totalChemistry = 0;

    for (let i = 0; i < n / 2; i++) {
        const pairSkill = skill[i] + skill[n - 1 - i];
        if (pairSkill !== targetSkill) return -1;
        
        totalChemistry += skill[i] * skill[n - 1 - i];
    }

    return totalChemistry;
}
