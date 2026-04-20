// /**
//  * Write a function that normalizes the 
//  */
// function gcd(num1: number, num2: number) {
//     while (num2) {
//         let temp = num1;
//         num1 = num2;
//         num2 = temp % num2;
//     }
//     return num1;
// }
// const startLCM = (numArr: number[]) => {
//     function lcm(num1: number, num2: number) {
//         return (num1 * num2) / gcd(num1, num2);
//     }
//     function lcmRecurse(index1: number, index2: number): number {
//         if (index1 == 0) {
//             return lcm(numArr[index1], numArr[index2]);
//         }
//         const num = lcmRecurse(index1 - 1, index1);
//         return lcm(num!, numArr[index2]);
//     }
//     return lcmRecurse(numArr.length - 2, numArr.length - 1);
// }
// console.log(startLCM([5, 3, 10]));

/**
* Write a function that normalizes the fraction using LCM
*/
function gcd(val1: number, val2: number) {
    while (val2) {
        let temp = val1;
        val1 = val2;
        val2 = temp % val2;
    }
    return val1;
}
function lcm(val1: number, val2: number) {
    return (val1 * val2) / gcd(val1, val2);
}

const startLcm = (numArr: number[]) => {
    if (numArr.length == 0) {
        return 0;
    }
    return numArr.reduce((acc, current) => lcm(acc, current));
}
export const convertFrac = (lst: [number, number][]): string => {
    const denominators = lst.map((item) => item[1]);
    console.log(denominators);
    const denominator = startLcm(denominators);
    console.log(denominator);
    let answer = "";
    for (const [num, den] of lst) {
        const factor = num * (denominator / den);
        answer = answer + ` ${factor} ${denominator}`;
    }
    return answer;
}
console.log(convertFrac([[1, 2], [1, 3], [1, 4]]));