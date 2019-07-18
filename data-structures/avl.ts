class AVL {
    root: NodeItem = null!;

    insert = (value) => {
        let current = this.root;
        if (this.root) {
            while (true) {
                if (current.value > value) {
                    if (current.left) {
                        current = current.left
                    } else {
                        current.left = new NodeItem(value)
                        current.left.parent = current;
                        break;
                    }
                } else {
                    if (current.right) {
                        current = current.right
                    } else {
                        current.right = new NodeItem(value)
                        current.right.parent = current;
                        break;
                    }
                }
            }
        } else {
            this.root = current = new NodeItem(value);
        }

        this.root = this.reBalance(current);
    }


    reBalance(current: NodeItem) {
        const h = this.height(current);
        let root = null;
        if (Math.abs(h) > 1) {
            this.rotate(current);
        }
        if (current.parent) {
            return this.reBalance(current.parent)
        } else {
            return current;
        }

    }

    rotate(current: NodeItem) {
        if (this.balanceFactor(current) > 1) {
            if (this.balanceFactor(current.left) === -1) {
                this.leftRotate(current.left);
            }
            this.rightRotate(current);
        }

        if (this.balanceFactor(current) < -1) {
            if (this.balanceFactor(current.right) === 1) {
                this.rightRotate(current.right);
            }
            this.leftRotate(current);
        }
    }

    leftRotate(root: NodeItem) {
        const pivot = root.right;
        pivot.parent = root.parent;
        if (root.parent) {
            if (root.parent.left && root.parent.left.value === root.value) {
                root.parent.left = pivot;
            } else {
                root.parent.right = pivot;
            }
        }
        root.parent = pivot;
        if (pivot.left) {
            pivot.left.parent = root;
        }

        root.right = pivot.left;
        pivot.left = root;
    }


    rightRotate(root: NodeItem) {
        const pivot = root.left;
        pivot.parent = root.parent;
        if (root.parent) {
            if (root.parent.left && root.parent.left.value === root.value) {
                root.parent.left = pivot;
            } else {
                root.parent.right = pivot;
            }
        }
        root.parent = pivot;
        if (pivot.right) {
            pivot.right.parent = root;
        }

        root.left = pivot.right;
        pivot.right = root;
    }

    // height(node) {
    //     let h = 0;
    //     if (node && (node.left || node.right)) {
    //         h = Math.max(this.height(node.left), this.height(node.right)) + 1
    //     } else {
    //         h =  0;
    //     }
    //     return h;
    // }

    height(node) {
        if (!node) {
            return 0;
        }
        const q: any = []
        q.push(node);
        let h = 0;
        let count = q.length;
        while (q.length > 0) {
            h++;
            count = q.length;
            while (count > 0) {
                const p = q.shift();
                if (p.left) {
                    q.push(p.left)
                }
                if (p.right) {
                    q.push(p.right)
                }
                count--;
            }
        }

        return h;
    }

    balanceFactor(node) {
        const b = node ? this.height(node.left) - this.height(node.right) : 0
        return b
    }

    print() {
        this.levelOrder(this.root);
    }

    private inorder(node: NodeItem) {
        if (node && node.value) {
            this.inorder(node.left);
            console.log(node.value);
            this.inorder(node.right);
        }
    }

    private levelOrder(node: NodeItem) {
        const q: any = [];
        q.push(node);

        while (true) {
            const l = q.length;
            if (l <= 0) {
                break;
            }

            const levels: any = []
            for (let i = 0; i < l; i++) {
                const n = q.shift();
                levels.push(n.value);
                if (n.left) {
                    q.push(n.left);
                }
                if (n.right) {
                    q.push(n.right);
                }
            }

            console.log(levels.join(' '))
        }
    }

    private maxDepth(node: NodeItem) {
        if (!node) {
            return 0;
        }
        return Math.max(this.maxDepth(node.right), this.maxDepth(node.left)) + 1;
    }

    private minDepth(node: NodeItem) {
        if (!node) {
            return 0;
        }
        return Math.min(this.minDepth(node.right), this.minDepth(node.left)) + 1;
    }

    isBalanced() {
        const balance = this.maxDepth(this.root) - this.minDepth(this.root);
        return balance > 1 ? false : true;
    }

    successor(node) {
        if (!node) {
            return false
        }

        if (node.right !== null) {
            return this.leftMostChild(node.right);
        } else {
            let p = node.parent;
            while (p) {
                if (p.parent.left.value == p.value) {
                    return p.parent;
                }
                p = p.parent;
            }
            return false;
        }
    }

    leftMostChild(current) {
        let node = current
        while (node.left !== null) {
            node = node.left;
        }
        return node;
    }

    get(value) {
        return this.search(this.root, value)
    }

    search(node, value) {
        if (!node) {
            return false;
        }
        if (node.value === value) {
            return node
        } else {
            return this.search(node.left, value) || this.search(node.right, value);
        }
    }

    find_lca(x, y) {
        return this.lca(this.root, x, y);
    }
    private lca(node, x, y) {
        if (!node) {
            return false;
        }
        if (node.value === x || node.value === y) {
            return node;
        }

        const isLeft = this.lca(node.left, x, y);
        const isRight = this.lca(node.right, x, y);

        if (isLeft && isRight) {
            return node
        } else {
            return isLeft || isRight
        }
    }

    subTree(t) {
        return this.containsTree(this.root, t);
    }

    containsTree(t1, t2) {
        if (t1 === null || t2 === null) {
            return false;
        }
        if (t1.value === t2.value) {
            if (this.checkSubTree(t1, t2)) {
                return true;
            }
        } else {
            return this.containsTree(t1.left, t2) ||
                this.containsTree(t1.right, t2);
        }
    }

    checkSubTree(t1, t2) {
        if (!t2) {
            return true;
        }

        if (!t1) {
            return false;
        }
        if (t1.value !== t2.value) {
            return false;
        }

        return (this.checkSubTree(t1.left, t2.left) && this.checkSubTree(t1.right, t2.right))
    }

    pathSum(sum) {
        const arr = []
        const result = this.preOrder(this.root, arr, sum)
        console.log(result);
    }

    private preOrder = (node, arr, sum) => {
        let current_path_counts = 0;
        if (node && node.value) {
            arr.push(node.value)
            current_path_counts = this.findPathCounts(arr, sum);
            if(!node.left && !node.right) {
                console.log(arr);
            } else {
                current_path_counts += this.preOrder(node.left, [...arr], sum)
                current_path_counts += this.preOrder(node.right, [...arr], sum)
            }
        }
        return current_path_counts
    }

    private findPathCounts(arr, expectedSum) {
        let sum = 0;
        let count = 0;
        for (let i = arr.length - 1; i >=0 ; i--) {
           sum += arr[i];
            if(sum === expectedSum){
                count++;
            }
        }
        return count;
    }
}

class NodeItem {
    left: NodeItem = null!;
    right: NodeItem = null!;
    parent: NodeItem = null!;
    value;

    constructor(_value) {
        this.value = _value;
    }
}


const tree = new AVL();
tree.insert(4);
tree.insert(1);
tree.insert(9);
tree.insert(8);
tree.insert(13);
tree.insert(14);
tree.insert(10);
tree.insert(7);
tree.insert(6);
tree.insert(11);
tree.insert(12);
tree.insert(15);
tree.insert(16);
tree.insert(17);
tree.insert(5);
tree.insert(3);
tree.insert(2);



tree.print();
// console.log(tree.balanceFactor(tree.root));
// tree.print();
//const five = tree.get(5);


//                          9
//              6 				         13
//          4 	    	  7	   		11	    	15
//      2     5    	    8        10   12     14         16
//  1  3                                                    17
// console.log(tree.find_lca(5, 8))
// console.log(tree.isBalanced());
// const t2 = new AVL();
// t2.insert(6);
// t2.insert(4);
// t2.insert(7);
// t2.print();

// console.log(tree.subTree(t2.root));
tree.pathSum(9)