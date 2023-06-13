/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  str = str.toLowerCase();
  const strArr = [];
  for(let i=0; i<str.length; i++){
    if(str[i] !== ' ' && str[i] !== '!' && str[i] !== '?' && str[i] !== '.' && str[i] !== ',' ) strArr.push(str[i]);
  }
  
  // console.log(strArr);
  for(var i=0; i<= (strArr.length)/2; i++){
    let j = strArr.length - i -1;
    if(strArr[i] !== strArr[j]) return false;
  }
  return true;
}

module.exports = isPalindrome;
