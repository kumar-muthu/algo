const fib = (n, h) => {
    console.log('****')
    if(h[n] != null) {
        return h[n]
    }
    h[n] =  fib(n-2, h) + fib(n-1, h)
    return h[n];
}

console.log(fib(200, {0: 0, 1: 1}))
