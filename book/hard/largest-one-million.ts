// Completed
import {MinHeap} from '../../data-structures/min-heap'

const largest = (items, n) => {
    let i= 0;
    const h = new MinHeap();
    items.forEach(element => {
       if(i < n) {
        h.insert(element);
        i++;
       } else {
           const min = h.peek();
           if(min < element) {
               h.pop();
               h.insert(element);
           }
       }
    });
    console.log(h.data);
}

const data = [1,2,3,4,10, 11, 5, 12, 6,7,8,9];
largest(data, 3);