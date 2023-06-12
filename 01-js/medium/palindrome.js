/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {

  const len = str.length;

  if(len == 0) return false;

  for(let i = 0; i < len / 2; i++) {
    if(str[i].toLowerCase() !== str[len - 1 - i].toLowerCase()) {
      return false;
    }
  }

  return true;
}

const output1 = isPalindrome("NanAn");
console.log(`output1 ${output1}`);

const output2 = isPalindrome("");
console.log(`output2 ${output2}`);

module.exports = isPalindrome;
