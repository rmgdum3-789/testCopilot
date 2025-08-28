function printPyramid(rows) {
    for (let i = 1; i <= rows; i++) {
        const spaces = ' '.repeat(rows - i);
        const stars = '* '.repeat(i);
        console.log(spaces + stars.trim());
    }
}

printPyramid(6);