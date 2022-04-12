// Write a function that takes in a binary string and returns the equivalent decoded text (the text is ASCII encoded).

// Each 8 bits on the binary string represent 1 character on the ASCII table.

// The input string will always be a valid binary string.

// Characters can be in the range from "00000000" to "11111111" (inclusive)

// Note: In the case of an empty binary string your function should return an empty string.

function binaryToString(binary) {
  let result = [], i = 0, n = binary.length;

   function split(arr, len) {
     while(i < n) {
       result.push(arr.slice(i, i+= len));
     }
 }
 split(binary,8);
 return result.map(num => String.fromCharCode(parseInt(num, 2))).join('')
}