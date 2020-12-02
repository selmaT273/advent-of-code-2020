const fs = require('fs');

const data = fs.readFileSync('inputday1puzzle1.txt');

// converts text file data to a string array
function convertToArray(textData) {
    return textData.toString().split("\n");
}

// convert to int array
// sort int array
// counter on each end, with if condition to check if too high or too low

const numData = convertToArray(data);


module.exports = convertToArray;
