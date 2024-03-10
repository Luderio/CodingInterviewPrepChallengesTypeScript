/**
 * A function that will handle the switching of elements to sort.
 * @param {number[]} inputArray An array of numbers to be switched. 
 * @returns {number[]} Returns nothing. Just switches the input array of numbers.
 */
const swap = (inputArray: number[]): number[] => {
    return [inputArray[0], inputArray[1]] = [inputArray[1], inputArray[0]];
}

/**
 * The main function. Accepts an array of unsorted array and returns the sorted array. 
 * It copies the input array inside the function to prevent the input array to be modified (following pure function principles)
 * executing a nested loop of do-while and for loop to loop through the unsorted (inputArray) array. 
 * It utilizes the swap function to swap the array of elements if the left element is larger than the right.
 * changing the element on the inputArray at every swap. 
 * @param {number[]} array Accepts an array of unsorted numbers.
 * @returns {number[]} Returns the sorted array of numbers.
 */
function bubbleSort(array: number[]): number[] {
    const inputArray = [...array]; // copies the input array. 

    let swapped: boolean = false;
    do {
        swapped = false;
        for(let i = 0; i < inputArray.length; i++) {
            if(inputArray[i] > inputArray[i+1]) {
                let swappedElements = swap([inputArray[i], inputArray[i+1]]);
                inputArray.splice(i, 1, swappedElements[0]);
                inputArray.splice(i+1, 1, swappedElements[1]);
                swapped = true;
            }
        }
    }

    while(swapped);
    return inputArray;
  }

  bubbleSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]);