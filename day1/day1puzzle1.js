const fs = require('fs');

const data = fs.readFileSync('day1/inputday1puzzle1.txt');

// converts text file data to a string array
function convertToArray(textData) {
    return textData.toString().split("\n");
}

// pass in data from txt file
const stringData = convertToArray(data);

// convert to int array and sort 
const intData = stringData.map(Number).sort();

// counter on each end, with if condition to check if too high or too low




module.exports = convertToArray;
