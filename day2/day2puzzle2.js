const fs = require('fs');

const data = fs.readFileSync('./inputday2puzzle1.txt');

function getLines(text) {
    return text.toString().split("\n");
}

function isValidPolicy(line) {
    const password = line.toString().split(" ")[2];
    const policyFreq = line.toString().split(" ")[0].split("-");
    const minFreq = policyFreq[0];
    const maxFreq = policyFreq[1]; 
    const policyLetter = line.toString().split(" ")[1][0];
    let correctCount = 0;
    if(password[minFreq - 1] == policyLetter && password[maxFreq - 1] != policyLetter) {
            correctCount++;
    }
    else if(password[minFreq - 1] != policyLetter && password[maxFreq - 1] == policyLetter){
        correctCount++;
    }

    if (correctCount == 1) {
        return true;
    }
}

const lines = getLines(data);
let validPolicies = 0;
for(i = 0; i < lines.length; i++) {
    if (isValidPolicy(lines[i])) {
        validPolicies++;
    }
}

console.log(validPolicies);
