const {input} = require('./input');

/**
 * Main function, calculates the number of valid passphrases
 * 
 * @param {String} input input data
 * @returns {Number} solution
 */
function calculateValidPassphrases(input) {
    let passphrases = input.split('\n');
    let count = 0;
    passphrases.forEach(passphrase => {
        if (isValid(passphrase)) {
            count++;
        };
    });
    return count;
}

/**
 * Returns whether a passphrase is valid or not
 * 
 * @param {String} passphrase
 * @returns {Boolean} is passphrase valid
 */
function isValid(passphrase) {
    let words = passphrase.split(' ');
    let orderedWords = words.map(orderWord);
    let wordsSet = new Set(orderedWords);
    return wordsSet.size === orderedWords.length;
}

/**
 * Returns the given word ordered alphabetically
 * 
 * @param {String} word
 * @returns {String} reordered word
 */
function orderWord(word) {
    return word.split('').sort().join();
}

console.log(calculateValidPassphrases(input)); // 167
