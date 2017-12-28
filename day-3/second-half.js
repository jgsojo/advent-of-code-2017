const {MemoryPosition} = require('./memory');

const input = 312051;

/**
 * Main function, calculates the first value written that is larger than the input
 * 
 * @param {Number} input input data
 * @returns {Number} solution
 */
function calculateSteps(input) {
    return getMemoryPosition(input).sum;
}

/**
 * Returns the last memory position, larger than the input, in the Spiral memory
 * 
 * @param {Number} limit input data
 * @returns {MemoryPosition} object with the info of the memory position
 */
function getMemoryPosition(limit) {
    limit = limit || 1;
    let memoryPosition = new MemoryPosition(new Map());
    while (memoryPosition.sum <= limit) {
        memoryPosition = memoryPosition.next();
    }
    return memoryPosition;
}

console.log(calculateSteps(input)); // 312453
