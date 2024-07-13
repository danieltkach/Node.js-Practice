const crypto = require('crypto');

process.env.UV_THREADPOOL_SIZE = 2;
const threadpoolSize = process.env.UV_THREADPOOL_SIZE;

let durations = [];
const totalOperations = 8;
let completedOperations = 0;

function printDuration() {
    let total = 0;
    let durationsByThread = [];
    for (let i = 0; i < totalOperations / threadpoolSize; i++) {
        let max = durations[i];
        for (let j = threadpoolSize * i; j < threadpoolSize; j++) {
            if (durations[i] > max) {
                max = durations[i];
            }
        }
        durationsByThread.push(max);
    }
    total = durationsByThread.reduce((a, c) => a += c);
    console.log('Duration: ', total);
    completedOperations = 0;
    durations.length = 0;
}

function runPbkdf2(times) {
    for (let i = 0; i < times; i++) {
        const start = Date.now();
        crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
            const duration = Date.now() - start;
            durations.push(duration);
            console.log(`${i + 1}: `, duration);
            completedOperations++;
            if (completedOperations === totalOperations) {
                printDuration();
            }
        });
    }
}

function testThreads() {
    console.log(`Testing with threadpool size: ${threadpoolSize}`);
    runPbkdf2(8);
}


testThreads();
