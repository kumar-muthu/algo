export const permutation = (arr, start, results) => {
    if (start >= arr.length) {
        results.push([...arr])
    } else {
        for (let i = start; i < arr.length; i++) {
            swap_arr(arr, start, i);
            permutation(arr, start + 1, results);
            swap_arr(arr, start, i);
        }
    }
    return results;
}


const swap_arr = (arr, i, j) => {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

 // const results = permutation([1, 2, 3], 0, []);
//  const results = permutation('sam'.split(''), 0, []);
// console.log(results);