for (let i = 1; i < 101; i++) {
    let placeholder = "";
    if (i % 3 === 0) {
        placeholder += "Fizz";
    }
    if (i % 5 === 0) {
        placeholder += "Buzz";
    }
    console.log(placeholder || i);
}
