const trailing = (n) => {
    // 5 ,15 ,20 , 25

    let i = 1
    let count = 0;
    while(n / Math.pow(5, i) > 0) {
        count += Math.floor(n / Math.pow(5, i));
        i++;
    }

    return count;
}

console.log(trailing(126));