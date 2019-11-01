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

const root = new Node(5, null)
const two = new Node(2, root)
two.left = new Node(1, two)
two.right = new Node(3, two)
const seven = new Node(7, root)
seven.left = new Node(6, seven)
seven.right = new Node(9, seven)
// seven.right.right = new Node(10)

root.left = two
root.right = seven

const inOrderSuccessor = (node) => {
  if(node.right) {
    return leftMost(node.right)
  }
  
  // if its a left child
  if(node.parent.left === node) {
    return node
  }  // if its a right child
  else {
    return inOrderSuccessor(node.parent)
  }
}

const leftMost = (node) => {
  while(node.left) {
    node = node.left
  }
  return node;
}

const result = inOrderSuccessor(two)
console.log(result.value)