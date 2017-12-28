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
 * @param {Number} input input data
 * @returns {MemoryPosition} object with coordinates {x, y}
 */
function getMemoryPosition(input) {
    let memorySpiral = generateSpiralMemory(input);
    return memorySpiral[input - 1];
}

/**
 * Generates a memory spiral until the limit is reached
 * 
 * @param {Number} limit the last item of memory we want to create
 * @returns {Array[Object]}
 */
function generateSpiralMemory(limit) {
    limit = limit - 1 || 0;
    let result = [new MemoryPosition()];
    for (let i = 0; i < limit; i++) {
        result.push(result[i].next());
    }
    return result;
}

console.log(calculateSteps(input)); // 430
