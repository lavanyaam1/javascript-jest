// add function

// success case
//  should give the sum of 2 numbers
//  should return the input directly only 1 number is given
//  should return the sum of first 2 numbers when more than 2 inputs are given

// failure
//  should throw invalid input when array given as input
//  should throw invalid input when string given as input
//  should throw error when integer raange exceeded

const add = require('../calculator');

describe('add function', function() {
    it('should give the sum of 2 numbers', function() {
        const sum = add(2, 3);
        expect(sum).toBe(5);
    });
    it('should return the input directly only 1 number is given', function() {
        const sum = add(2);
        expect(sum).toBe(2);
    });
    it('should return sum of first 2 number',function(){
        const sum = add(2,4,6,7,8);
        expect(sum).toBe(6);
    });
    // failure test cases
    it('should return invalid input for string',function(){
        const sum = add('a','b');
        expect(sum).toEqual("Invalid Input!");
    })
    it('should return invalid input for array',function(){
        const sum = add([1,2,3],[4,5,6]);
        expect(sum).toEqual("Invalid Input!");
    });
    it('should return invalid input for objects',function(){
        const sum = add({a:1});
        expect(sum).toEqual("Invalid Input!");
    });
    it('should throw error when integer raange exceeded',function(){
        const sum = add(32768,2);
        expect(sum).toEqual("Inputs are out of range");
    })
});
