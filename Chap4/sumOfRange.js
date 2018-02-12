const range = (start, end, step) => {
    let total = [];
    if (!step) {
        step = 1;
    }
    for (; start <= end; start += step) {
        total.push(start);
    }
    return total.join(' ');
};

console.log(range(1, 10));
// 1 2 3 4 5 6 7 8 9 10

console.log(range(50, 60, 3));
// 50 53 56 59

const runningSum = (...numbers) => {
    let total = 0;
    for (let number of numbers) {
        total += number;
    }
    return total;
};

console.log(runningSum(33, 44, 11));
// 88
console.log(runningSum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
// 55