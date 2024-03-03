//will switch the array elements on the given indeces.
function switcher(input: string[], index1: number, index2: number) {
    [input[index1], input[index2]] = [input[index2], input[index1]];
}

//will check if the permuted elements has the same consecutive elements and returns true if yes, false if no.
function consecutiveChecker(input: string[]): boolean {
    let hasConsecutive: boolean[] = [];

    for(let i = 0; i < input.length; i++) {
        if(input[i] === input[i+1]) {
            hasConsecutive.push(true)
        }else {
            hasConsecutive.push(false)
        }
    }

    if (hasConsecutive.includes(true)) {
        return true;
    } else {
        return false;
    }
}


function permAlone(input: string): number {

    //Split the input string into an array using the .split() method.
     const inputArray: string[] = input.split(""); 

    //stroes all the permuted elements of the input string.
    const result: string[][] = [];

     //generates all possible permutation based on Heap's Algorithm and stroes the permuted elements inside the result variable.
     const generate = (n: number, inputArray: string[]) => {
        if(n === 1) {
            result.push([...inputArray]);
            return;
        }else {
            generate(n-1, inputArray);
        }

        for(let i = 0; i < n-1; i++) {
            if(n % 2 === 0) {
                switcher(inputArray, i, n-1);
            } else {
                switcher(inputArray, 0, n-1);
            }

            generate(n-1, inputArray)
        }
}
//executes the function
generate(inputArray.length, [...inputArray]);

//filters the permuted elements without the same consecutive elements.
const permuteAlone = result.filter((element) => {
    return consecutiveChecker(element) === false
});

   return permuteAlone.length; //displays the number of permAlone elements
}

permAlone('aab');