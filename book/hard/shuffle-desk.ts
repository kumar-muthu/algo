 // Completed
 const shuffle = (cards) => {
     for (let index = 0; index < cards.length; index++) {
         const temp = cards[index];
         const rand = Math.floor(index + (Math.random() * (cards.length - index)));
         
         cards[index] = cards[rand];
         cards[rand] = temp;
     }
     return cards;
 }

 const data: any = [];
 for (let index = 0; index < 56; index++) {
     data.push(index + 1);
 }

 console.log(data.join(','));
 console.log(shuffle(data).join(','));