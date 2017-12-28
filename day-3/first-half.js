const {MemoryPosition} = require('./memory');

const input = 312051;

/**
 * Main function, calculates the number of steps to carry the data
 * 
 * @param {Number} input input data
 * @returns {Number} solution
 */
function calculateSteps(input) {
    return getMemoryPosition(input).distanceToCenter;
}

/**
 * Returns the coordinates of a specific number in the Spiral memory
 * 
 * @param {Number} limit input data
 * @returns {MemoryPosition} object with the info of the memory position
 */
function getMemoryPosition(limit) {
    limit = limit || 1;
    let memoryPosition = new MemoryPosition(new Map());
    while (memoryPosition.value < limit) {
        memoryPosition = memoryPosition.next();
    }
    return memoryPosition;
}

console.log(calculateSteps(input)); // 430
