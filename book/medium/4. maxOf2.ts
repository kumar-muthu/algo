const max = (x: number, y: number) => {
    return (x + y + Math.abs(x - y)) / 2
}


const maxBin = (x: number, y: number) => {
    const c = x - y;
    const k = c >> 31 & 0b1;
    return x - k * c ;
}


console.log(maxBin(58, 33));