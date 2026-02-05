/**
 * Question 2
 * Check for anagrams in a string array
 */
/**
 * Groups strings in an array into anagrams.
 * @param {string[]} x - Array of strings to check
 * @returns {function(): Object} Returns a closure function that gives the grouped anagrams
 */
function checkAnagrams(x) {
    // let frequency = {};
    // x.forEach((word, index) => {
    //     let chars = word.split("");
    //     frequency[`word[${index}]`] = {};
    //     chars.forEach((char) => {
    //         frequency[`word[${index}]`][char] = frequency[`word[${index}]`][char] ? frequency[`word[${index}]`][char] + 1 : 1;
    //     })
    // })

    // console.table(frequency);
    let group = {};
    x.forEach((str) => {
        const key = str.split('').sort().join('');
        if (!group[key]) {
            group[key] = [];
        }
        group[key].push(key);
    });
    return () => {
        for (const key of Object.keys(group)) {
            console.log(`Anagram count for ${key}: `, group[key].length);
        }
    }
}
checkAnagrams(['abb', 'bab', 'bba', 'abc'])();