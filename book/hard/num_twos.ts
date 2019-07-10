// Completed
const num_twos = (n) => {
    /*
    535 = 5*f(99) + f(35) + 100

    275 =2*f(99) + f(75) + 75 + 1
    */
    if (n === 0) {
        return 0;
    }

    // find power
    let power = 1;
    while (power * 10 < n) {
        power *= 10
    };

    const first = Math.floor(n / power);
    const rest = n % power;

    let result = 0;
    if (first > 2) {
        result += power;
    }

    if (first === 2) {
        result += rest + 1;
    }

    result +=  first * num_twos(power - 1) + num_twos(rest);

    return result;
}

console.log(num_twos(22));
