const get_route = (graph, start, end) => {
    const visited: any = [];
    let queue = [start];

    while(queue.length > 0) {
        const current = queue.shift();
        console.log(current);
        if(visited.includes(current)) {
            continue;
        }
        visited.push(current);
        if(current === end) {
            return true;
        }
        queue = queue.concat(graph[current]);
    }
    return false;
}


const g = {
    1: [2],
    2: [5],
    3: [4, 6],
    4: [2],
    5: [7],
    6: [1],
    7: [8],
    8: []
}

// console.log(get_route(g, 3, 5));
console.log(get_route(g, 5, 8));