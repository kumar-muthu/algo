// Completed

export class MinHeap {
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
        if (this.data[parent] > this.data[index]) {
            this.swap(parent, index);
            this.bubbleUp(parent);
        }
    }

    private bubbleDown(index) {
        const minChild = this.getMinChildren(index);
        if (this.data[minChild] < this.data[index]) {
            this.swap(minChild, index);
            this.bubbleDown(minChild);
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

    private getMinChildren(index) {
        const child1 = (index*2) + 2;
        const child2 = (index*2) + 2 - 1;
        if (this.data[child1] < this.data[child2]) {
            return child1;
        } else {
            return child2;
        }
    }
}

// const heap = new MinHeap();
// heap.insert(5);
// heap.insert(4);
// heap.insert(3);
// heap.insert(2);
// heap.insert(6);
// heap.insert(7);
// heap.insert(8);
// // MinHeap { data: [ 2, 3, 4, 5, 6, 7, 8 ] }

// heap.pop();
// // MinHeap { data: [ 3, 4, 6, 5, 8, 7 ] }

// heap.pop();
// // MinHeap { data: [ 4, 5, 6, 7, 8 ] }

// heap.insert(1);
// console.log(heap);
