// completed
import {
    Kadane
} from '../../data-structures/kadane';

const max_sum = (square) => {
    let max_l, max_r, max_t, max_b, max_sum = -Infinity;
    // for each column combination apply kadane and get the maximum range
    // copy first column to aux
    for (let l = 0; l < square.length; l++) {
        let aux: any = (new Array(square.length)).fill(0);
        for (let r = l; r < square.length; r++) {
            // sum remaining with the previous column
            for (let i = 0; i < square.length; i++) {
                aux[i] = aux[i] + square[i][r];
            }
            const kadane = new Kadane(aux)
            const k = kadane.find();
            if (max_sum < k.sum) {
                max_sum = k.sum;
                max_t = k.top;
                max_b = k.bottom;

                max_l = l;
                max_r = r;
            }
        }
    }

    console.log(`Sum : ${max_sum}, Left: ${max_l}, Right: ${max_r}, Top: ${max_t}, Bottom: ${max_b}`);
}




const create_array = (size) => {
    const result: any = []
    for (let i = 0; i < size; i++) {
        result.push(new Array(size))
    }
    return result;
}

const input = [
    [-1, -1, 0, 0],
    [-1, -1, 2, 2],
    [-1, -1, 2, 2],
    [-1, -1, 0, 0]
]

const result = max_sum(input)