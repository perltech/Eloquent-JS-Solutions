const firstBoard = () => {
    const space = "# # # # ";
    const hash = " # # # #";
    const BOARD_SIZE = 4;

    for (let i = 0; i < BOARD_SIZE; i++) {
        if (space.charAt(7) === " ") {
            console.log(space);
        }

        if (hash.charAt(7) === "#") {
            console.log(hash);
        }
    }
};
firstBoard();

const boardRefactor = () => {
    const space = " ";
    const hash = "#";

    let spaceLine = [];
    let hashLine = [];

    const size = 8;

    for (let i = 0; i < size; i++) {
        spaceLine.push(space);
        spaceLine.push(hash);
    }

    for (let i = 0; i < size; i++) {
        hashLine.push(hash);
        hashLine.push(space);
    }

    for (let i = 0; i < size; i++) {
        console.log(spaceLine.join(''));
        console.log(hashLine.join(''));
    }
};
boardRefactor();


const hisSolution = () => {
    var size = 8;

    var board = "";

    for (var y = 0; y < size; y++) {
        for (var x = 0; x < size; x++) {
            if ((x + y) % 2 == 0)
                board += " ";
            else
                board += "#";
        }
        board += "\n";
    }

    console.log(board);
};
hisSolution();
