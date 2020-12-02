const fs = require('fs');

const data = fs.readFileSync('inputday1puzzle1.txt');

function convertToArray(textData) {
    return textData.toString().split("\n");
}

module.exports = convertToArray;
