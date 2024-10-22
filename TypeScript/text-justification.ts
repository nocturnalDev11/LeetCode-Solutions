function fullJustify(words: string[], maxWidth: number): string[] {
    const result: string[] = [];
    let currentLine: string[] = [];
    let currentLength = 0;

    for (const word of words) {
        if (currentLength + word.length + currentLine.length > maxWidth) {
            let spacesToDistribute = maxWidth - currentLength;
            let gaps = currentLine.length - 1;

            let line = '';
            if (gaps > 0) {
                let spacesPerGap = Math.floor(spacesToDistribute / gaps);
                let extraSpaces = spacesToDistribute % gaps;

                for (let i = 0; i < currentLine.length; i++) {
                    line += currentLine[i];

                    if (i < gaps) {
                        line += ' '.repeat(spacesPerGap + (i < extraSpaces ? 1 : 0));
                    }
                }
            } else {
                line = currentLine[0] + ' '.repeat(spacesToDistribute);
            }

            result.push(line);

            currentLine = [word];
            currentLength = word.length;
        } else {
            currentLine.push(word);
            currentLength += word.length;
        }
    }

    const lastLine = currentLine.join(' ') + ' '.repeat(maxWidth - (currentLength + (currentLine.length - 1)));
    result.push(lastLine);

    return result;
}

console.log(fullJustify(
    ["What", "must", "be", "acknowledgment", "shall", "be"], 
    16
));

function visualizeOutput(output: string[]) {
    output.forEach(line => {
        console.log(`'${line}'`);
    });
}

visualizeOutput(fullJustify(
    ["What", "must", "be", "acknowledgment", "shall", "be"], 
    16
));
