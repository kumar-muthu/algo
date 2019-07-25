const findMissing = (arr, x) => {
    const odd: any = []
    const even: any = []

    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        if ((element >> x) & 1) {
            odd.push(element)
        } else {
            even.push(element)
        }
    }
    if (even.length === 0 || odd.length === 0) {
        return even.length === 0 ? '0' : '1'
    }

    if (odd.length >= even.length) {
        return findMissing(even, x + 1) + '0'
    } else {
        return findMissing(odd, x + 1) + '1'
    }
}

const arr = [0, 1, 2, 3, 4, 5, 6, 7, 9]
const result = findMissing(arr, 0);
console.log(parseInt(result, 2))