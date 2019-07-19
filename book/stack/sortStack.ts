class SortStack {
    arr: any = []

    push(value) {
        this.arr.push(value)
    }

    pop() {
        return this.arr.pop()
    }

    peek() {
        return this.arr[this.arr.length -1]
    }

    isEmpty() {
        return this.arr.length > 0 ? false : true;
    }
}

const sort = (st) => {
    const temp = new SortStack();
    while(!st.isEmpty()) {
        const top = st.pop()

        while(!temp.isEmpty() && temp.peek() < top) {
            st.push(temp.pop())
        }
        temp.push(top);
    }
    console.log(temp.arr);
}


const s = new SortStack();
s.push(4)
s.push(3)
s.push(1)
s.push(5)
s.push(2)


sort(s);

console.log(s.arr);