class BinaryTree {
    root

    insert(arr) {
        this.root = this.add(arr, 0, arr.length-1)
    }

    add(arr, start, end) {
        console.log(`${start}, ${end}`)
        if(end < start) {
            return;
        }
        const mid = Math.floor((start + end) / 2);
        const n = new BinaryNode(arr[mid])
        n.left = this.add(arr, start, mid -1)
        n.right = this.add(arr, mid + 1, end)
        return n
    }
}

class BinaryNode {
    left
    right
    constructor(public value) {

    }
}

const r = new BinaryTree()
r.insert([1,2,3,4,5,6,7,8,9,10]);

console.log(r.root);