// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

function solution(str){
    let result = []
    let x = str.split('')
    
    if(x.length % 2 !== 0) { x.push('_') }
    
    for(let i = 0; i < x.length; i+=2) {
      result.push(x[i] + x[i + 1])
    }
  
    return result
  }