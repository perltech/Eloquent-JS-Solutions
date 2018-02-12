function countBs(string) {
    var count = 0;
    for (i = 0; i < string.length; i++) {
        if (string.charAt(i) === "B") {
            count++;
        }
    }
    console.log(count);
}

countBs("RICKY BOBBY"); // 3
countBs("Bobby Hill"); // 1

// More functional refactor
function countChar(string, character) {
    var count = 0;
    for (i = 0; i < string.length; i++) {
        if (string.charAt(i) === character) {
            count++;
        }
    }
    console.log(count);
}
countChar("Chachi", "c") // 1
countChar("Queens of the stone age", "e") // 5