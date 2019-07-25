const get_count_conversion = (a, b) => {
    let r = a ^ b
    let count = 0;
    while (r != 0) {
        if ((r & 1) === 1) {
            count++;
        }
        r = r >> 1;
    }
    return count;
}

console.log(get_count_conversion(0b11101, 0b01111)) // 111(1), 15 (or: (1111)