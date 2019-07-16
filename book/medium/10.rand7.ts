const rand7 = () => {
 while(true) {
    const r =  (rand5() - 1) * 5  + (rand5() - 1);
    if(r < 21) {
        return r % 7 + 1;
    }
 }
}

const rand5 = () => {
    return Math.floor(Math.random() * 5) + 1;
}

let i = 0;
while(i < 100) {
    console.log(rand7());
    i++;
}