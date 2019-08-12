const merge_sort = (large, small) => {
    let i = large.length -1;
    let j = small.length - 1;
    let k = i + j + 1;

    while(i >= 0 && j >= 0) {
        if(large[i] > small[j]) {
            large[k--] = large[i--]
        } else {
            large[k--] = small[j--]
        }
    }

    while(j>=0) {
        large[k--] = small[j--]
    }

    console.log(large);
}

const large = [1,3,5,7,9,11]
const small = [2,4,6,8,10]

merge_sort(large, small);