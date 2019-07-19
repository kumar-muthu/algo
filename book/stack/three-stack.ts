class Stacks {

    arr: any = [];
    freeList: any = [];
    prevPointers: any = [];
    tops;
    constructor(public N) {
        this.tops = (new Array(N)).fill(-1);
    }

    push(n, value) {
        let newTop;
        let previousTop = this.tops[n];
        if (this.freeList.length > 0) {
            newTop = this.freeList.pop();
            this.arr[newTop] = value;
            this.tops[n] = newTop;
        } else {
            this.arr.push(value);
            newTop = this.arr.length - 1;
            this.tops[n] = newTop;
        }
        this.prevPointers[newTop] = previousTop;
    }

    pop(n) {
        const top = this.tops[n];
        this.freeList.push(top);
        this.tops[n] = this.prevPointers[top];
        return this.arr[top];
    }
}

const s3 = new Stacks(3);

s3.push(0, 1);
s3.push(0, 2);
s3.push(0, 3);
console.log(s3.pop(0));


s3.push(1, 5);
s3.push(1, 6);
s3.push(1, 7);
console.log(s3.pop(0));
console.log(s3.pop(1));