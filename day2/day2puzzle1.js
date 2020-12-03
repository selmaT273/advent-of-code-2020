const fs = require('fs');

const data = fs.readFileSync('./inputday2puzzle1.txt');

function getLines(text) {
    return text.toString().split("\n");
}

function isValidPolicy(line) {
    const password = line.toString().split(" ")[2];
    const policyFreq = line.toString().split(" ")[0].split("-");
    const minFreq = policyFreq[0];
    const maxFreq = policyFreq[1]
    const policyLetter = line.toString().split(" ")[1][0];
    let letterCount = 0;  
    for(j = 0; j < password.length; j++){
        if(password[j] == policyLetter){
            letterCount++;
        }
    }
    if (letterCount >= minFreq && letterCount <= maxFreq) {
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
