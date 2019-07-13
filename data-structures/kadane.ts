export class Kadane {
    constructor(private arr) {

    }

    find() {
        let sum = 0;
        let top = 0,
            bottom = 0;
        let max_so_far = 0;
        for (let i = 0; i < this.arr.length; i++) {
            const temp_sum = sum + this.arr[i];

            if (temp_sum > 0) {
                sum = temp_sum;
                if (temp_sum > max_so_far) {
                    max_so_far = temp_sum;
                    bottom = i;
                }
            } else {
                sum = 0;
                top = i + 1;
            }
        }

        if(sum === 0 && top === 0 && bottom == this.arr.length -1) {
            // all negative, so can return the minimum
        } 
        return {
            sum: max_so_far,
            top,
            bottom
        }
    }
}
// const k = new Kadane([-1, 3, 5, -2, 3, 5]);
// const k = new Kadane([-1, -3, 5, -2, 3, 5]);
// const k = new Kadane([-1, -3, -5, -2, -3,- 5]);
// const result = k.find();
// console.log(result);