const printBinary = (num, pre) => {
    const x: any = []
    const y: any = []

    let integral = Math.floor(num);
    while(integral > 0) {
        x.push(integral % 2)
        integral = Math.floor(integral / 2);
    }

    let precision = 1;
    let decimal = num - (Math.floor(num))
    while(pre > precision) {
        const new_decimal = decimal * 2
        y.push(Math.floor(new_decimal))
        decimal = new_decimal - Math.floor(new_decimal);
        precision++;
    }

    console.log(`${x.reverse().join('')}.${y.join('')}`)

}

printBinary(6.986, 8)
/*
Input: n = 6.986 k = 8
Output: 110.11111100
*/