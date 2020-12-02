const { expect } = require('@jest/globals');
// import { convertToArray } from './day1puzzle1';
const convertToArray = require('./day1puzzle1');

const fs = require('fs');

test('can read array', () => {
    
    const data = fs.readFileSync('inputday1puzzle1.txt');
    expect(convertToArray(data)[0]).toBe('1941');
})