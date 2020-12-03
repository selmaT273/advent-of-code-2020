const fs = require('fs');

const data = fs.readFileSync('./inputday3.txt');


function convertToArray(data) {
    return data.toString().split("\n");
}

console.log(convertToArray(data));