 // Completed
 const pick = (cards, n) => {
    for (let index = 0; index < n; index++) {
        const temp = cards[index];
        const rand = Math.floor(index + (Math.random() * (cards.length - index)));
        
        cards[index] = cards[rand];
        cards[rand] = temp;
    }
    return cards.slice(0, n);
}

const data: any = [];
for (let index = 0; index < 56; index++) {
    data.push(index + 1);
}
console.log(pick(data, 10).join(','));