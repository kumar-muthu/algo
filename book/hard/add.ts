// Completed
const add = (a, b) => {
    /*

    101
    001

    100 <= XOR
    010 <= AND SHIFTED 

    110 <= AND

    */
    let sum, carry;
    while (b > 0) {
        sum = a ^ b; // add without carry
        carry = (a & b) << 1; // carry but don't add
        a = sum;
        b = carry;
    }
    return a;
}

console.log(add(3, 5));