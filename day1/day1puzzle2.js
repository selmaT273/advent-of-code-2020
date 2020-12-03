const fs = require('fs');

const data = fs.readFileSync('./inputday1puzzle1.txt');

// converts text file data to a string array
function convertToArray(textData) {
    return textData.toString().split("\n");
}

// pass in data from txt file
const stringData = convertToArray(data);

// convert to int array and sort 
const intData = stringData.map(Number).sort((a, b) => (a - b));

console.log(intData[intData.length - 1]);
console.log(intData[intData.length - 2]);

// counter on each end, with if condition to check if too high or too low
function checkTripleSum(numData) {
    let i = 0;
    let j = numData.length - 1;
    let k = 1;
    while (numData[i] + numData[j] + numData[k] !== 2020 && k < j) {
        if (numData[i] + numData[j] + numData[k] > 2020) {
            j--;
        } 
        else if ((numData[i] + numData[j] + numData[k] < 2020) && (k - 1 === i)) {
            k++;
        }
        else {
            i++;
        }

        // console.log(i, k, j);
        // console.log(numData[i], numData[k], numData[j]);
        // console.log(numData[i] + numData[k] + numData[j]);

    }

    console.log(numData[i]);
    console.log(numData[j]);
    console.log(numData[k]);
    return numData[i] * numData[j] * numData[k];
}

console.log(checkTripleSum(intData));