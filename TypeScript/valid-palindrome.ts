function isPalindrome(s: string): boolean {
    const normalized = s
        .toLowerCase()
        .replace(/[^a-z0-9]/g, '');

    const reversed = normalized.split('').reverse().join('');
    return normalized === reversed;
}
