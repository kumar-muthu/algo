// Completed

export class MaxHeap {
    data: any = [];
    public constructor() {

    }
    public insert(item) {
        this.data.push(item);
        this.bubbleUp(this.data.length - 1);
    }

    public pop() {
        this.swap(0, this.data.length - 1);
        const data = this.data.pop();
        this.bubbleDown(0);
        return data;
    }

    public peek() {
        return this.data[0];
    }

    private bubbleUp(index) {
        const parent = this.getParent(index);
        if (this.data[parent] < this.data[index]) {
            this.swap(parent, index);
            this.bubbleUp(parent);
        }
    }

    private bubbleDown(index) {
        const maxChild = this.getMaxChildren(index);
        if (this.data[maxChild] > this.data[index]) {
            this.swap(maxChild, index);
            this.bubbleDown(maxChild);
        }
    }

    private getParent(index) {
        return Math.round(index / 2 - 1);
    }

    private swap(index1, index2) {
        const temp = this.data[index1];
        this.data[index1] = this.data[index2];
        this.data[index2] = temp;
    }

    private getMaxChildren(index) {
        const child1 = (index*2) + 2;
        const child2 = (index*2) + 2 - 1;
        if (this.data[child1] > this.data[child2]) {
            return child1;
        } else {
            return child2;
        }
    }
}

// const heap = new MaxHeap();
// heap.insert(5);
// heap.insert(4);
// heap.insert(3);
// heap.insert(2);
// heap.insert(6);
// heap.insert(7);
// heap.insert(8);
// // MinHeap { data: [ 2, 3, 4, 5, 6, 7, 8 ] }
// console.log(heap);

// heap.pop();
// // MinHeap { data: [ 3, 4, 6, 5, 8, 7 ] }
// console.log(heap);

// heap.pop();
// // MinHeap { data: [ 4, 5, 6, 7, 8 ] }
// console.log(heap);

// heap.insert(1);
// console.log(heap);