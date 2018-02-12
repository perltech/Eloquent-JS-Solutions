function recurseEvenOdd(numberArg) {
    if (numberArg === 0) {
        return console.log(true)
    }
    if (numberArg === 1) {
        return console.log(false)
    }

    recurseEvenOdd(
        numberArg - 2);
}

recurseEvenOdd(50);
recurseEvenOdd(75);