function printPyramid(rows) {
    for (let i = 1; i <= rows; i++) {
        const spaces = ' '.repeat(rows - i);
        const stars = '* '.repeat(i);
        console.log(spaces + stars.trim());
    }
}

// Get number of rows from command-line argument, default to 6
const numRows = parseInt(process.argv[2], 10) || 6;
printPyramid(numRows);