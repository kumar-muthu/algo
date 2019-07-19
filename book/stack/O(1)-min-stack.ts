class MinStack {
    arr: any = [];
    aux: any = [];
    push(value) {
        this.arr.push(value);
        const currentMin = this.aux[this.aux.length - 1] || Infinity;
        this.aux.push(currentMin < value ? currentMin : value);
    }

    pop() {
        this.aux.pop();
        return this.arr.pop();
    }

    min() {
        return this.aux[this.aux.length - 1];
    }
}

const m = new MinStack();
m.push(5);
m.push(4);
m.push(3);
m.push(10);
m.push(12);
m.push(8);
console.log(m.min());

