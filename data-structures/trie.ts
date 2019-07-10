// Completed

export class Trie {
    root = new TrieNode();
    constructor() {

    }

    insert(str) {
        let handle = this.root;
        for (let index = 0; index < str.length; index++) {
            const element = str[index];
            let keyFound = false;
            for (let j = 0; j < handle.children.length; j++) {
                const child = handle.children[j];
                if (child.key === element) {
                    keyFound = true;
                    if(index === (str.length - 1)) {
                        child.is_leaf = true;
                    }
                    handle = child;
                    break;
                }
            }

            if (!keyFound) {
                const newNode = new TrieNode();
                newNode.key = element;
                newNode.is_leaf = (index === (str.length - 1))
                handle.children.push(newNode);
                handle = newNode;
            }
        };
    }

    is_exists(str) {
        let handle = this.root;
        for (let index = 0; index < str.length; index++) {
            const element = str[index];
            let keyFound = false;
            for (let j = 0; j < handle.children.length; j++) {
                const child = handle.children[j];
                if (child.key === element) {
                    if (index !== (str.length - 1) || (index === (str.length - 1) && child.is_leaf === true)) {
                        keyFound = true;
                        handle = child;
                        break;
                    }
                }
            }

            if (!keyFound) {
                return false;
            }
        }
        return true;
    }
}

class TrieNode {
    key;
    is_leaf = false;
    children: TrieNode[] = [];
    constructor() {

    }
}


// const t = new Trie();
// t.insert('hello');
// t.insert('hell');
// console.log(t.is_exists('hello'));
// console.log(t.is_exists('hell'));
// console.log(t.is_exists('hellow'));
// console.log(t.is_exists('sam'));