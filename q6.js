/**
* Create a function taking a positive integer between 1 and 3999(both included) as its parameter and returning a string containing the Roman Numeral representation of that integer.
*/

function romanNumericalEncoder(num) {
    if (num > 99999) return () => console.log("Not a valid number");
    let answer = "";
    const numerals = [
        [1000, "M"],
        [900, "CM"],
        [500, "D"],
        [400, "CD"],
        [100, "C"],
        [90, "XC"],
        [50, "L"],
        [40, "XL"],
        [10, "X"],
        [9, "IX"],
        [5, "V"],
        [4, "IV"],
        [1, "I"]
    ];
    for (const [value, symbol] of numerals) {
        while (num >= value) {
            num = num - value;
            answer = answer + symbol;
        }
    }
    return () => console.log(answer);
}

romanNumericalEncoder(2023)();