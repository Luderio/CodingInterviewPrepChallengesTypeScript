"use strict";
/**
 * A function adding 2 array elements, their index positions and the argument number in which the sum of 2 array elements should be equal to.
 * @param {number[]} inputArray an array of 2 number elements to be added.
 * @param {number[]} indices an array of 2 number elements which is the index position of the inputArray elements.
 * @param {number} args a number to which the sum of inputArray elements should be equal to.
 * @returns array of numbers, the indices of the 2 aray elements whose sume is equal to args.
 */
const findPairs = (inputArray, indices, args) => {
    let sum = inputArray[0] + inputArray[1];
    let arrayOfIndeces = [];
    if (sum === args && indices[0] !== indices[1]) {
        arrayOfIndeces.push(indices[0], indices[1]);
    }
    return arrayOfIndeces;
};
/**
 * A function that accepts an array of numbers (1D or 2D array of numbers) then adds all of the array elements.
 * It then returns a number which is the sum of the array elements.
 * @param {number[]} arrayOfIndeces array of numbers containing the index positions of 2 array elements equal to the arg.
 * @returns number, the sum of all the indices.
 */
const sumOfIndeces = (arrayOfIndeces) => {
    const initialValue = 0;
    let sum = arrayOfIndeces.flat().reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);
    return sum;
};
/**
 * A function that accepts an array of numbers (arr), and a number (arg) in which a sum of 2 array elements (arr[0] + arr[1]) should be equal to (arg),
 * then returns the sum of the indices of the 2 aray elements that equals to the arg
 * @param {number[]} arr  an array of numbers.
 * @param {number} arg  a number
 * @returns {number} returns a number which is the sum of the indices of the 2 array elements equals to arg
 */
function pairwise(arr, arg) {
    const inputArray = arr.slice(); // copies the input array: arr.
    const indexes = [];
    for (let i = 0; i < inputArray.length; i++) {
        let current = inputArray[i]; //selects the current array elements
        for (let j = 0; j < inputArray.length; j++) {
            let indices = findPairs([current, inputArray[j]], [i, j], arg);
            if (indices.length !== 0) {
                if (indexes.length !== 0 && indexes.flat().includes(indices[0]) || indexes.flat().includes(indices[1])) {
                    //no action
                }
                else {
                    indexes.push([...indices]);
                }
            }
        }
    }
    const sum = sumOfIndeces(indexes);
    return sum;
}
pairwise([1, 4, 2, 3, 0, 5], 7);
// let sum = pairwise([1, 4, 2, 3, 0, 5], 7);
// let sum =  pairwise([1, 3, 2, 4], 4);
// let sum = pairwise([1, 1, 1], 2);
// let sum = pairwise([0, 0, 0, 0, 1, 1], 1);
// let sum = pairwise([], 100);
// console.log(sum);
