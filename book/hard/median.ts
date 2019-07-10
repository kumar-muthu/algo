// completed

import {
    MinHeap
} from '../../data-structures/min-heap'
import {
    MaxHeap
} from '../../data-structures/max-heap'

class Median {
    min = new MinHeap();
    max = new MaxHeap();

    insert(data) {
        if (this.max.peek() && this.max.peek() >= data) {
            this.max.insert(data);
        } else {
            this.min.insert(data);
        }

        if(this.min.data.length - this.max.data.length > 1) {
            const reallocate = this.min.pop();
            this.max.insert(reallocate);
        }

        if(this.max.data.length - this.min.data.length > 1) {
            const reallocate = this.max.pop();
            this.min.insert(reallocate);
        }
        console.log(`Min : ${this.min.data.join(',')}`)
        console.log(`Max : ${this.max.data.join(',')}`)
    }

    median() {
        
        console.log(`Min : ${this.min.data.join(',')}`)
        console.log(`Max : ${this.max.data.join(',')}`)
        if (this.min.data.length < this.max.data.length) {
            return this.max.peek();
        } else if (this.min.data.length > this.max.data.length) {
            return this.min.peek();
        } else {
            return (this.min.peek() + this.min.peek()) / 2;
        }
    }
}
const a = new Median();
a.insert(6);
a.insert(7);
a.insert(8);
a.insert(3);
a.insert(4);
a.insert(5);
//a.insert(9);

console.log(a.median())