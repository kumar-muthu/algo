const permute = (str, r, f) => {

    console.log(`permute(${str}, [${r}], [${f}]`)

    if (str.length <= 0) {
        f.push(r.join(''));
        return;
    }
    for (let index = 0; index < str.length; index++) {
        const element = str[index]; //a
        const temp = [...str];
        temp.splice(index, 1) // bc
        const t = [...r, element]
        permute(temp.join(''), t, f) 
    }
    return f
}

const result = permute('abc', [], []);

console.log(result);