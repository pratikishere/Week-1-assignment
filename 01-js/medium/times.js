/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
*/

function calculateTime(n) {
    const startTime = Date.now();
    let sum = sumOf(n);
    const endTime = Date.now();
    return ((endTime - startTime) / parseFloat(1000));
}

function sumOf(n) {
    let sum = 0;
    for(let i = 1; i < n; i++) {
        sum += i;
    }
    return sum;
}

let totalTime = calculateTime(100);
console.log(`Time took 1-100 ${totalTime}`);

totalTime = calculateTime(1_00_000);
console.log(`Time took 1-1_00_000 ${totalTime}`);

totalTime = calculateTime(1_000_000_000);
console.log(`Time took 1-1_000_000_000 ${totalTime}`);