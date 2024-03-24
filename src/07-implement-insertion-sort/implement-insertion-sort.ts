/**
 * A function that takes a array of numbers and returns the sorted version of the input.
 * @param {number[]} array array of numbers
 * @returns {number[]} array of numbers
 */
function insertionSort(array: number[]): number[] {
    let inputArray: number[] = [...array];

    for(let i = 1; i < inputArray.length; i++) { // loops on the input array from the first element to last.
        let currentValue = inputArray[i];
        let j: number;
        for(j = i - 1; j >= 0 && inputArray[j] > currentValue; j--) { // loops on the input array from the current inputArray[i] index backwards
            inputArray[j + 1] = inputArray[j]; // moves the index of the sorted array to the right by one index
        }

        // inserts the current inputArray[i] value to the sorted index if the sorted index value is greater than the current value
        inputArray[j+1] = currentValue; 
    }

    return inputArray;
  }

  insertionSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92])