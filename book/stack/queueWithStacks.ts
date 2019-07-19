class Stack {
    arr: any = []

    push(value) {
        this.arr.push(value)
    }

    pop() {
        return this.arr.pop()
    }
}

class Queue {
    s1 = new Stack()
    s2 = new Stack()

    enqueue(value) {
        this.s1.push(value)
    }

    dequeue() {
        if (this.s2.arr.length > 0) {
            return this.s2.pop()
        } else {
            while (this.s1.arr.length > 0) {
                this.s2.push(this.s1.pop())
            }
            return this.s2.pop()
        }
    }
}

const q = new Queue()
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);

console.log(q.dequeue())
console.log(q.dequeue())