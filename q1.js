/**
 * Question 1
 * Detect a palindrome in a string 
 */
function checkPalindrome(x){
    let leftPointer = 0, rightPointer = (x.length-1), isPalindrome = true;
    while(leftPointer<rightPointer){
        if(x[leftPointer]===x[rightPointer]){
            leftPointer++;
            rightPointer--;
        }
        else {
            isPalindrome = false;
            break;
        }
    }
    if(isPalindrome){
        return ()=>console.log('String is a palindrome');
    }
    else{
        return ()=>console.error('Not a palindrome');
    }
}
const consoleArgs = process.argv.slice(2);
console.log(consoleArgs);
// console.log((Number(consoleArgs[0])).reverse().join(''));
checkPalindrome(consoleArgs[0])();