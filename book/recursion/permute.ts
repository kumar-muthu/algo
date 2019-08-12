const permute = (str, r, f) => {

    console.log(`permute(${str}, [${r}], [${f}]`)

    if (str.length <= 0) {
        f.push(r.join(''));
        return;
    }
    for (let index = 0; index < str.length; index++) {
        const element = str[index]; // take one char - 'a'
        const temp = [...str]; // copy
        temp.splice(index, 1) // remove that char from copy - 'a'
        const t = [...r, element] // add 'a'
        permute(temp.join(''), t, f) 
    }
    return f
}

const result = permute('abc', [], []);

console.log(result);