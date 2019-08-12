const anagarm = (arr) => {
    arr.sort((x , y) => {
        return (stringSort(x) > stringSort(y)) ? 1 : -1;
    })
    console.log(arr)
}

const stringSort = (str) => {
    return str.split('').sort().join('')
}
const arr = ['sam', 'mat', 'mas', 'los', 'amt']

anagarm(arr)