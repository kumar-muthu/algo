const powerSet = (sets, i, r) => {
    if (i >= sets.length) {
        return r;
    }

    const s: any = []
    r.forEach(element => {
        s.push(element)
        s.push([...element, sets[i]])
    });
    return powerSet(sets, i + 1, s);
}

const sets = [1, 2, 3]

const result = powerSet(sets, 0, [
    []
]);

console.log(result);