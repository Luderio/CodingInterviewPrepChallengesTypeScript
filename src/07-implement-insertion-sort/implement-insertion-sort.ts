
function insertionSort(array: number[]): number[] {
    let inputArray: number[] = [...array];

    for(let i = 1; i < inputArray.length; i++) {
        let currentValue = inputArray[i];
        let j: number;
        for(j = i - 1; j >= 0 && inputArray[j] > currentValue; j--) {
            inputArray[j + 1] = inputArray[j];
        }
        inputArray[j+1] = currentValue;
    }

    console.log(inputArray)
    return array;
  }

  insertionSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92])