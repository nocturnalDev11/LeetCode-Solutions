function canSortArray(nums: number[]): boolean {
    function setBits(num: number): number {
        let count = 0;
        for (let i = 31; i >= 0; i--) {
            if (((num >> i) & 1) === 1) {
                count++;
            }
        }
        return count;
    }

    function check(nums: number[]): boolean {
        for (let i = 0; i < nums.length - 1; i++) {
            if (nums[i] > nums[i + 1]) {
                return false;
            }
        }
        return true;
    }

    const count: number[] = [];
    for (let j = 0; j < nums.length; j++) {
        count[j] = setBits(nums[j]);
    }

    const n = nums.length;
    let k = 0;
    while (k < n) {
        for (let i = 1; i < n; i++) {
            if (count[i] === count[i - 1] && nums[i] < nums[i - 1]) {
                const temp = nums[i];
                nums[i] = nums[i - 1];
                nums[i - 1] = temp;
            }
        }
        if (check(nums)) {
            return true;
        }
        k++;
    }
    return false;
}
