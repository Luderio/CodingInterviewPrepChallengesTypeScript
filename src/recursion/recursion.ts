const counter = (input: number) => {
    console.log(input);

    const updatedNum: number = input + 1;

    if (updatedNum <= 10) {
        counter(updatedNum)
    }

}

console.log(counter(1))