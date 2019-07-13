//completed

const swap = (a, b) => {
    a = b - a;
    b = b - a;
    a = b + a;

    console.log(`a: ${a}, b: ${b}`);
}

swap(13, 15);