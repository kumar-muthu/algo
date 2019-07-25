const flipWin = (num) => {
    console.log(num.toString(2))
    let current = 0;
    let previous = 0;
    let max = 0;
    while (num > 0) {
        if (num & 1) {
            current++;
        } else {
            if ((num >> 1) & 1) {
                previous = current
            } else {
                previous = 0;
            }
            current = 0;
        }
        num = num >> 1;

        max = Math.max(max, previous + current);
    }

    console.log(max + 1);
}

flipWin(1775)