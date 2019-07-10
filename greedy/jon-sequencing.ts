const  jobs = [ ['b', 1, 19], ['c', 2, 27], ['a', 2, 100], ['d', 1, 25], ['e', 3, 15]]; 

const sequence = new Array(3);

const sorted = jobs.sort((a: any, b: any) => (a[2]) < (b[2]) ? 1 : -1)

sorted.forEach((r: any) => {
    for (let index = r[1]; index > 0; index--) {
        const slot = sequence[index];
        if(!slot) {
            sequence[index] = r[0];
            break;
        }
    }
})

console.log(sequence);