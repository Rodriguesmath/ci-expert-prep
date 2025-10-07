export const toBinary = (decStr) => {
    if (decStr.trim() === '' || !/^\d+$/.test(decStr.trim())) return '';
    return BigInt(decStr.trim()).toString(2);
};
export const binaryToDecimal = (binStr) => {
    binStr = binStr.trim();
    if (binStr === '' || !/^[01]+$/.test(binStr)) return '';
    return BigInt('0b' + binStr).toString();
};
