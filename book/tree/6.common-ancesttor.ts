class Node {
    left;
    right;
    value;
    parent;
    constructor(val, parent) {
      this.value = val;
      this.parent = parent;
    }
}
  

//         5
//     2        7
//  1     3   6   8
//                  10
let ten, six;
const root = new Node(5, null)
const two = new Node(2, root)
two.left = new Node(1, two)
two.right = new Node(3, two)
const seven = new Node(7, root)
seven.left = six = new Node(6, seven)
seven.right = new Node(9, seven)
seven.right.right = ten = new Node(10)

root.left = two
root.right = seven

const commonAncestor = (n1, n2) => {
  while(n1) {
    if(isAncestor(n1, n2)) {
      return n1;
    }
    n1 = n1.parent;
  }
  return false;
}

const isAncestor = (a, b) => {
  const queue = [a]
  while(queue.length > 0) {
    const ele = queue.shift() // dequeue
    if(!ele) {
      continue
    }
    if(ele.value === b.value) {
      return true
    }
    queue.push(ele.left)
    queue.push(ele.right)
  }
  return false
}

const result = commonAncestor(two, ten)
console.log(result.value) // 7