/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  if(str1.length !== str2.length) return false;
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  const str1Arr = [], str2Arr = [];
  for(let i=0; i<str1.length; i++) {
    str1Arr.push(str1[i]);
    str2Arr.push(str2[i]);
  }
  str1Arr.sort();
  str2Arr.sort();
  for(let i=0; i<str1Arr.length; i++) {
    if(str1Arr[i] !== str2Arr[i]) return false;
  }
  return true;
}

module.exports = isAnagram;
