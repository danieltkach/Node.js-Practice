const crypto = require('crypto');
process.env.UV_THREADPOOL_SIZE = 4;

let durations = [];
const totalOperations = 8;
let completedOperations = 0;

function printDuration() {
    if (completedOperations === totalOperations) {
        const total = durations.reduce((a, c) => a += c, 0);
        console.log('Duration: ', total);
    }
}

function runPbkdf2(times) {
    const start = Date.now();
    for (let i = 0; i < times; i++) {
        crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
            const duration = Date.now() - start;
            durations.push(duration);
            console.log(`${i + 1}: `, duration);
            completedOperations++;
            printDuration();
        });
    }
}

crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    const duration = Date.now() - start;
    durations.push(duration);
    console.log('1: ', duration);
    completedOperations++;
    printDuration();
});

crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    const duration = Date.now() - start;
    durations.push(duration);
    console.log('2: ', duration);
    completedOperations++;
    printDuration();
});

crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    const duration = Date.now() - start;
    durations.push(duration);
    console.log('3: ', duration);
    completedOperations++;
    printDuration();
});

crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    const duration = Date.now() - start;
    durations.push(duration);
    console.log('4: ', duration);
    completedOperations++;
    printDuration();
});

crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    const duration = Date.now() - start;
    durations.push(duration);
    console.log('5: ', duration);
    completedOperations++;
    printDuration();
});

crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    const duration = Date.now() - start;
    durations.push(duration);
    console.log('6: ', duration);
    completedOperations++;
    printDuration();
});

crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    const duration = Date.now() - start;
    durations.push(duration);
    console.log('7: ', duration);
    completedOperations++;
    printDuration();
});

crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    const duration = Date.now() - start;
    durations.push(duration);
    console.log('8: ', duration);
    completedOperations++;
    printDuration();
});
