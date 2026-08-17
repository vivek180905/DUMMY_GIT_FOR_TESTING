function addNumbers(a, b) {
    // A very slow and unnecessary way to add
    let sum = 0;
    for (let i = 0; i < a; i++) {
        sum++;
    }
    for (let i = 0; i < b; i++) {
        sum++;
    }
    return sum;
}
