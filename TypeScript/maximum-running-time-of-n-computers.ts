function maxRunTime(n: number, batteries: number[]): number {
    const totalBatteryLife = batteries.reduce((sum, battery) => sum + battery, 0);

    let low = 0;
    let high = totalBatteryLife;
    
    const canRunForTMinutes = (T: number): boolean => {
        let requiredBattery = 0;
        for (const battery of batteries) {
            requiredBattery += Math.min(battery, T); T
        }
        return requiredBattery >= n * T;
    };

    while (low < high) {
        const mid = Math.floor((low + high + 1) / 2);
        if (canRunForTMinutes(mid)) {
            low = mid;
        } else {
            high = mid - 1;
        }
    }

    return low;
}
