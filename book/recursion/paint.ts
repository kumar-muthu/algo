const paint = (arr, oColor, nColor, x, y) => {
    if (x < 0 || x >= arr.length || y < 0 || y >= arr.length) {
        return
    }

    if(arr[x][y] === oColor) {
        arr[x][y] = nColor;
        paint(arr, oColor, nColor, x-1, y);
        paint(arr, oColor, nColor, x+1, y);
        paint(arr, oColor, nColor, x, y-1);
        paint(arr, oColor, nColor, x, y+1);
    }
}

const arr = [
    [1, 1, 1, 0],
    [1, 0, 1, 1],
    [1, 0, 1, 0],
    [1, 0, 0, 1]
]

paint(arr, 0, 2, 1, 1);

arr.forEach(r => console.log(r))