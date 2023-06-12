/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
    str1 = str1.replaceAll(' ','');
    str2 = str2.replaceAll(' ','');

    if(str1.length !== str2.length) {
      return false;
    }
    
    let sortedStr1 = str1.toLowerCase().split('').sort().join('');
    let sortedStr2 = str2.toLowerCase().split('').sort().join('');
    
    return (sortedStr1 === sortedStr2)
}

let input1 = isAnagram(" as", "s  ");
console.log(`output1 ${input1}`);

let input2 = isAnagram("Sun sets in the west", "snu etss nihte eswt");
console.log(`output2 ${input2}`);

let input3 = isAnagram("JOKER", "poker");
console.log(`output3 ${input3}`);

module.exports = isAnagram;
