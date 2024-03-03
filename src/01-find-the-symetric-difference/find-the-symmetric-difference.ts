const sym = (array1: number[], array2: number[], ...inputArray: number[][]): number[] => {
    let result: number[] = [];

    //function to handle binary array operation/comparison
    const compareArrays = (array1: number[], array2: number[]): number[] => {
        let symetry: number[] = [];

        for (let i = 0; i < array1.length; i++) {
            if (array2.includes(array1[i])) {
                
            }else{
                symetry.push(array1[i]);
            }
        }

        for (let i = 0; i < array2.length; i++) {
            if (array1.includes(array2[i])) {
            }else{
                symetry.push(array2[i]);
            }
        }
        return symetry;
    }

    // condition which checks if the input/arguments has more than 2 values. 
    // if more than 2, resolve the first 2, assign the symetric difference of the first 2 to the local symetry variable 
    // and loop on the rest taking 1 array item at a time and comparing it to the current local symetry value and 
    // assign a new symetry value at each comparison.
    // if there are only 2 values, it compares the symetrical difference of the two and assigns the value to the global resu;t variable. 
    if (inputArray.length >= 1) {
        let symetry: number[] = [];
        symetry = compareArrays(array1, array2);
        for (let i = 0; i < inputArray.length; i++) {
            symetry = compareArrays(symetry, inputArray[i]);
        }
        result = symetry;

    }else {
        let symetry = compareArrays(array1, array2);
        result = symetry;
    }

    // filters the result array variable and removes duplicate items and sort it. 
    let uniqueArray = result.filter(function(item, pos) {
        return result.indexOf(item) == pos;
    }).sort();

    return uniqueArray;
}

sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]);