// completed

import {
    Trie
} from '../../data-structures/trie';
import {
    permutation
} from '../permutation';
const max_cross_words = (arr) => {
    const t = new Trie();
    for (let i = 0; i < arr.length; i++) {
        t.insert(arr[i]);
    }
    const hash = pre_process(arr);
    const keys = Object.keys(hash).sort((a, b) => (a > b ? a : b) as unknown as number);

    for (let i = 0; i < keys.length; i++) {
        const strings = hash[keys[i]];
        const data = is_cross(strings, t);
        if (data) {
            console.log(data);
            break;
        }
    }
}

class Rectangle {
    rows: any = [];
    constructor(private t: Trie) {

    }

    insert(row) {
        this.rows.push(row);
    }


    get_rows() {
        return this.rows;
    }

    pop() {
        this.rows.pop();
    }

    getColumns() {
        const columns: any = [];
        for (let i = 0; i < this.rows[0].length; i++) {
            const col: any = []
            for (let j = 0; j < this.rows.length; j++) {
                col.push(this.rows[j][i])
            }
            columns.push(col.join(''));
        }
        return columns;
    }

    isPerfect() {
        const columns = this.getColumns();
        for (let i = 0; i < columns.length; i++) {
            const col = columns[i];
            if (!this.t.is_exists(col)) {
                return false;
            }
        }
        return true;
    }

}

const is_cross = (strings, t) => {

    const perumtations: any = permutation(strings, 0, []);

    for (let i = 0; i < perumtations.length; i++) {
        const r = new Rectangle(t);
        const element = perumtations[i];
        for (let j = 0; j < element.length; j++) {
            if(r.get_rows().length >= strings[0].length) {
               continue;
            }
            const k = element[j];

            r.insert(k);
            if (r.isPerfect()) {
                return r.get_rows();
            }
        }
    }
    return false;
}

const pre_process = (arr) => {
    const hash = {};
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        const length = element.length;
        if (!hash[length]) {
            hash[length] = [];
        }
        hash[length].push(element);
    }
    return hash;
}

const input = [
    'as',
    'sa',

    'sam',
    'mea',
    'ice',
    'tea',
    'sit',
    'ace',
]

max_cross_words(input);