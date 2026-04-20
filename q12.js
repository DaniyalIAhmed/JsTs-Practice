/**
 * Write a function that normalizes the
 */
function gcd(num1, num2) {
    while (num2) {
        var temp = num1;
        num1 = num2;
        num2 = temp % num2;
    }
    return num1;
}
var startLCM = function (numArr) {
    function lcm(num1, num2) {
        return (num1 * num2) / gcd(num1, num2);
    }
    function lcmRecurse(index1, index2) {
        if (index1 == 0) {
            return lcm(numArr[index1], numArr[index2]);
        }
        var num = lcmRecurse(index1 - 1, index1);
        return lcm(num, numArr[index2]);
    }
    return lcmRecurse(numArr.length - 2, numArr.length - 1);
};
console.log(startLCM([2, 3, 4]));
