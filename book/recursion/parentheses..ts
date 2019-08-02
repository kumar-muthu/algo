const parentheses = (count, open, close, r, t) => {
    if(open === count && close === count) {
        r.push(t.join(''));
        return;
    }

    if(open <= count) {
        const temp = [...t, '(']
        parentheses(count, open + 1, close, r, temp)
    }
    if(open > close) {
        const temp = [...t, ')']
       parentheses(count, open, close + 1, r, temp)
    } 

    return r;
}

const result = parentheses(3,0,0, [], [])
console.log(result);

