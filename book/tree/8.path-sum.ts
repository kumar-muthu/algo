const _ = require('lodash')
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
//     2        1
//  1     3   6   1
//                  1
let ten, six;
const root = new Node(5, null)
const two = new Node(2, root)
two.left = new Node(1, two)
two.right = new Node(3, two)
const seven = new Node(1, root)
seven.left = six = new Node(6, seven)
seven.right = new Node(1, seven)
seven.right.right = ten = new Node(1)

root.left = two
root.right = seven

//two.right.left = new Node(123, two)

const getPaths = (node, sum) => {
  const results = []
  results.push(count(node, sum, [node.value]))
  results.push(node.left !== undefined ? getPaths(node.left, sum, [node.left.value]): 0)
  results.push(node.right !== undefined ? getPaths(node.right, sum, [node.right.value]): 0)
  return _.sum(results)
}

const count = (node, sum, paths) => {
  if(!node) {
    return 0;
  }
  
  const currentSum = _.sum(paths)
  if(currentSum === sum) {
    console.log(paths.join(','))
    return 1;
  }
  const results = []
   
  results.push(  node.left !== undefined ? count(node.left, sum, [...paths, node.left.value]) : 0 )  
  results.push(  node.right !== undefined ? count(node.right, sum, [...paths, node.right.value]) : 0 )
  return _.sum(results)
}

const result = getPaths(root, 3)
console.log(result) // 7