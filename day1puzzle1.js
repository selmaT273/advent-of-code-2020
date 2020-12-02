const fs = require('fs');

fs.readFile('inputday1puzzle1.txt', (err, data) => {
    if (err) throw err;
    const text = data.toString();
    const numberarray = text.split("\n");
    
    return numberarray;
})