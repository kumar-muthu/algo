const pair = (arr, sum) => {
    const map = {}
    for (let i = 0; i < arr.length; i++) {
        map[sum - arr[i]] = true
    }

    for (let i = 0; i < arr.length; i++) {
        if(map[arr[i]]) {
            console.log(`a: ${arr[i]}, b: ${sum - arr[i]}`)
        }
    }
}

pair([1,2,3,4,5,6, 7], 9);