const pair_swap = (x) => {
    const even = x & 0xaaaaaaaa
    const odd = x & 0x55555555

    console.log(even.toString(2))
    console.log(odd.toString(2))

    return (even >>> 1) | (odd << 1)
}

console.log(pair_swap(0b101010).toString(2))