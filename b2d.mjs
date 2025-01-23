function binaryToFloat(input) {
    if (!input) {
        throw new Error('No input provided');
    }

    if (!/^[01.]+$/.test(input)) {
        throw new Error('Input must be a binary number, found non 0/1/. characters.');
    }

    const binaryPointIdx = input.indexOf('.');
    const chars = input.split('');

    let power = binaryPointIdx === -1
        ? input.length - 1
        : binaryPointIdx - 1;
    let decimal = 0;

    for (let i = 0; i < chars.length; i++) {
        let char = chars[i];

        if (char === '1') {
            decimal += Math.pow(2, power);
        }

        if (char !== '.') {
            power--;
        }
    }

    const nBits = chars.filter(c => c !== '.').length;

    return {
        input,
        decimal,
        maxCombinations: Math.pow(2, nBits) 
    }
}

import * as process from 'process';

const input = process.argv[2];

try {
    const { decimal, maxCombinations } = binaryToFloat(input);
    console.log(`Binary: ${input}`);
    console.log(`Decimal: ${decimal}`);
    console.log(`Max combinations for given bits: ${maxCombinations}`);
} catch (err) {
    console.log(`Error: ${err.message}`);
}
