const triangle = () => {
    let total = "";

    for (let i = 0; i < 8; i++) {
        const hash = "#";
        total += hash;
        console.log(total);
    }
};
triangle();

const hisSolution = () => {
    for (var line = "#"; line.length < 8; line += "#")
        console.log(line);
};
hisSolution();
