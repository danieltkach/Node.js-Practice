function printNumbers() {
    for (let i = 0; i < 5; i++) {
        console.log(`Numbers: ${i}`);
    }
}

function printSomeNumbers1() {
    let accumulator = 0;
    for (let i = 0; i < 10_000_000; i++) {
        accumulator += i;
    }
    console.log(`SomeNumbers1`);
}

function printSomeNumbers2() {
    let accumulator = 0;
    for (let i = 0; i < 10_000_000; i++) {
        accumulator += i;
    }
    console.log(`SomeNumbers2`);
}

function printLetters() {
    for (let letter of ['a', 'b', 'c', 'd', 'e']) {
        console.log(`Letters: ${letter}`);
    }
}



// Simulating concurrency with setTimeout
setTimeout(printSomeNumbers1, 0);
setTimeout(printSomeNumbers2, 0);
// setTimeout(printNumbers, 0);
// setTimeout(printLetters, 0);

console.log("Both functions have been called.");
