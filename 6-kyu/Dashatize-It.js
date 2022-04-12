// Given a variable n,

// If n is an integer, Return a string with dash'-'marks before and after each odd integer, but do not begin or end the string with a dash mark. If n is negative, then the negative sign should be removed.

// If n is not an integer, return an empty value.

// Ex:

// dashatize(274) -> '2-7-4'
// dashatize(6815) -> '68-1-5'

function dashatize(num) {
  let final = '';
  if(isNaN(num)) return 'NaN';
  if(num < 0) num = num*-1;
  
  let myFunc = num => Number(num);
  let intArr = Array.from(String(num), myFunc);
  let result = intArr
    .map(int => 
         int%2 != 0 ? `-${int}-` : int)
    .join('').replace(/[-]{2}/g,"-");

  if(result[0] === '-' && result[result.length - 1] === '-') {
    return result.substring(1, result.length-1);
  }
  if (result[0] === '-') {
     return result.substring(1, result.length);
  }
  if (result[result.length - 1] === '-') {
     return result.substring(0, result.length -1);
  } 
  return result;
}