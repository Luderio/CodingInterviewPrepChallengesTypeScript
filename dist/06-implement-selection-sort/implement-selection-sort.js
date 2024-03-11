"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * A function that handles the switching of elements based on their index position.
 * @param {number[]} input An array of numbers (inputArray).
 * @param {number} index1 A number which is the index position of the first array element to be switched.
 * @param {number} index2 A number which is the index position of the second array element to be switched.
 * @returns {number[]} Returns the modified input array (inputArray). Returned for viewing purposes of the array elements being switched.
 */
function switcher(input, index1, index2) {
    [input[index1], input[index2]] = [input[index2], input[index1]];
    return input;
}
/**
 * A function that takes in an array of unsorted array on numbers then returns the sorted version of the array.
 * @param {number[]} array An array of unsorted array of numbers.
 * @returns {number[]} Returns the sorted array of elements.
 */
function selectionSort(array) {
    let inputArray = [...array]; // copies the array input to prevent it from being modified. 
    // console.log(inputArray) //uncomment this to understand what is happening during the loop
    for (let i = 0; i < inputArray.length; i++) {
        let minimum = inputArray[i];
        // console.log("current_index: ", i, "current_value: ", minimum) //uncomment this to understand what is happening during the loop.
        for (let j = i + 1; j < inputArray.length; j++) {
            // console.log([i, j]) //uncomment this to understand what is happening during the loop
            if (inputArray[j] < minimum) {
                minimum = inputArray[j];
                // console.log("new_index: ", j, "new_value: ", minimum) //uncomment this to understand what is happening during the loop
                switcher(inputArray, i, j);
                //let test = switcher(inputArray, i, j);
                // console.log(test) //uncomment this to understand what is happening during the loop
            }
        }
    }
    // console.log(inputArray) //uncomment this to understand what is happening during the loop
    return inputArray;
}
selectionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]);
