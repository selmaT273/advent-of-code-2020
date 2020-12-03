const fs = require('fs');

const data = fs.readFileSync('day1/inputday1puzzle1.txt');

// converts text file data to a string array
function convertToArray(textData) {
    return textData.toString().split("\n");
}

// pass in data from txt file
const stringData = convertToArray(data);

// convert to int array and sort 
const intData = stringData.map(Number).sort((a, b) => (a - b));

// counter on each end, with if condition to check if too high or too low
function checkSum(intData) {
    let i = 0;
    let j = intData.length - 1;
    while (intData[i] + intData[j] !== 2020) {
        if (intData[i] + intData[j] > 2020) {
            j--;
        } 
        else if (intData[i] + intData[j] < 2020) {
            i++;
        }
    }
    console.log(intData[i]);
    console.log(intData[j]);
    return intData[i] * intData[j];
}

console.log(checkSum(intData));


// module.exports = convertToArray;
