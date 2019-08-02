const binaryPowerSet = (sets) => {
    const final: any = []
    for (let index = 0; index < Math.pow(2, sets.length); index++) {
        let t = index;
        const result: any = []
        let i = 1;
        while(t > 0) {
            if((t & 1) === 1) {
                result.push(sets[i - 1])
            }
            i++;
            t = t >> 1
        }
        final.push(result)
    }
    return final;
}

const result = binaryPowerSet([1,2,3,4,5]);

console.log(result);
