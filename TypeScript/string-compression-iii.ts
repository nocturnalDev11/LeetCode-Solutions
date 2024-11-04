function compressedString(word: string): string {
    let comp: string = '';
    let i = 0;
    
    while (i < word.length) {
        let char = word[i];
        let count = 0;

        while (i < word.length && word[i] === char && count < 9) {
            count++;
            i++;
        }

        comp += count.toString() + char;
    }
    
    return comp;
}
