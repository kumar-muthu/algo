const num_ways = (n, change, t, f) => {
    if (0 === n) {
        f.push(t.join(','));
        return;
    }

    if (n < 0) {
        return;
    }

    const element = change[0];
    for (let j = 0; n >= (element * j); j++) {
        const temp = [...t, ...(Array(j).fill(element))]
        const newChange = [...change];
        newChange.splice(0, 1)
        num_ways(n - (element * j), newChange, temp, f)
    }

    return f;
}

const r = num_ways(8, [1, 3, 5, 7], [], [])
console.log(r)
console.log(r.length)