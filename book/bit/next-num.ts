const next = (x) => {
    let i = 0
    let j = 0

    let r = x;

    // Turn on first 1 next to a zero (right to left)
    while (((r & 1) === 0 && (r != 0))) {
        i++;
        r = r >> 1
    }

    while ((r & 1) === 1) {
        j++;
        r = r >> 1
    }

    const p = i + j;
    let s = x | (1 << p)
    s = s & ~((1 << p) - 1)
    s = s | ((1 << (j - 1)) - 1)

    return s;
}

const prev = (x) => {
    let c1 = 0, c0 = 0;
    let temp = x;

    while ((temp & 1) === 1) {
        c1++
        temp = temp >> 1
    }

    while ((temp & 1) === 0) {
        c0++;
        temp = temp >> 1
    }

    let p = c0 + c1;
    x = x & (-1 << (p + 1))
    x = x | (((1 << (c1 + 1)) - 1) << (c0 - 1))
    return x;
}

console.log(next(0b1100101).toString(2))
console.log(prev(0b1100101).toString(2))