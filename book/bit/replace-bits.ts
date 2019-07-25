const replace = (a, b, i, j) => {
    const left = -1 - ((1 << j) - 1)
    const right = (1 << i) - 1
    const mask = left | right
    const r = a & mask;
    const s = r | (b << (i));
    console.log(s.toString(2))
}

const a = 0b10000000000
const b = 0b10101


replace(a, b, 2, 6)
/*
Input: N = 10000000000, M = 10101, i = 2, j = 6
Output: N = 10001010100
*/