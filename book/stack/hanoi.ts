const first = [5,4,3,2,1]
const second = []
const third = []

const hanoi = (start, end, aux, num) => {
    console.log(start, end, aux)
    if(num > 0) {
        if(num === 1) {
            const item = start.pop();
            end.push(item);
            return;
        }
        hanoi(start, aux, end, num - 1)
        hanoi(start, end, aux, 1)
        hanoi(aux, end, start, num - 1)
    }
}

hanoi(first,second, third, 5)

console.log(first)
console.log(second)
console.log(third)

