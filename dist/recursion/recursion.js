"use strict";
const counter = (input) => {
    console.log(input);
    const updatedNum = input + 1;
    if (updatedNum <= 10) {
        counter(updatedNum);
    }
};
console.log(counter(1));
