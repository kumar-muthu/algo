const knapSack = (W, wt, val, n) => {
    let bag = 0;
    let bagVal = 0;
    let values = [];
    for (let i = 0; i < n; i++) {
        values.push({
            weight: wt[i],
            quantity: val[i],
            importance: val[i] / wt[i]
        });
    }

    values = values.sort((a, b) => b.importance - a.importance);
    values.forEach(r => {
        while ( (bag + 1) <= W && r.weight > 0) {
            bag += 1;
            bagVal += r.importance;
            r.weight--;
        }

    })
    return bagVal;

};


const val = [60, 100, 120]
const wt = [10, 20, 30]
const W = 50
const n = val.length;
const result = knapSack(W, wt, val, n)
console.log(result);
// Outputs 220