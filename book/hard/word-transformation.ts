// completed

interface String {
    replaceAt(index, char): string;
}
String.prototype.replaceAt = function (index, char) {
    const arr = this.split("");
    arr[index] = char;
    return arr.join("");
}
const transform = (start, end, dic) => {
    const collection = {};
    for (let index = 0; index < dic.length; index++) {
        const str = dic[index];
        for (let j = 0; j < str.length; j++) {
            const key = str.replaceAt(j, '_');
            const oneEditAwayHash = oneEditAway(dic, j);
            collection[key] = oneEditAwayHash[key];
        }
    }
    const path = [];
    findPath(start, end, collection, path, []);
    console.log(path);
}

const findPath = (start, end, collection, path, visited) => {
    path.push(start);
    visited.push(start);
    for (let i = 0; i < start.length; i++) {
        const key = start.replaceAt(i, '_');
        const children = collection[key];
        if (children.includes(end)) {
            path.push(end);
            return true;
        } else {
            for (let j = 0; j < children.length; j++) {
                const element = children[j];
                if (element === start || visited.includes(element)) {
                    continue;
                }

                if (findPath(element, end, collection, path, visited)) {
                    return true;
                }
            }
        }
    }
    return false;
}

const oneEditAway = (arr, pos) => {
    const data: any = {};
    for (let k = 0; k < arr.length; k++) {
        const key = arr[k].replaceAt(pos, '_');
        if (!data[key]) {
            data[key] = [];
        }
        data[key].push(arr[k]);
    }
    return data;
}

// const dic = ['sam', 'sat', 'sit', 'kit'];
const dic = ['ram', 'tom', 'rom', 'rum', 'dom', 'dot', 'lot'];
transform('ram', 'lot', dic);