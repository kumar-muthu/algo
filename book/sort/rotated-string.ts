const find = (arr, i, j, n) => {
    if(i <0 || j<0 || i>= arr.length || j>= arr.length) {
        return -1;
    }

    const mid = Math.floor((i + j) / 2);

    if(arr[mid] === n) {
        return mid;
    }
    let next: any = []
    let sortedHalf: any = []
    let otherHalf: any = []
    if(i <= mid) {
        // This half is sorted 
        sortedHalf = [i, mid - 1]
        otherHalf = [mid + 1, j]
    } else {
        // other half is sorted
        sortedHalf = [mid + 1, j]
        otherHalf = [i, mid - 1]
    }
    if (arr[sortedHalf[0]] <=n && arr[sortedHalf[1]]>= n) {
        next = sortedHalf;
    }  else {
        next = otherHalf;
    }
    return find(arr, next[0], next[1], n)

}

const arr = [6,7,8,9,1,2,3,4,5]

const result = find(arr, 0, arr.length - 1, 9)
console.log(result);