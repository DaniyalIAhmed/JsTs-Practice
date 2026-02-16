/**
 * You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.
 */
function findOutlier(numArr) {
    var evens = numArr.filter(function (num) { return num % 2 === 0; });
    var odds = numArr.filter(function (num) { return num % 2 !== 0; });
    return evens.length > odds.length ? odds[0] : evens[0];
}
console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21]));
