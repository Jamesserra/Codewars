// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

//So Messy
function toCamelCase(str){  
  if(!str) return str
  let reg = /[-]|[_]/g
  if(str.match(reg)) {
   return str.replace(reg, ' ').split(' ').map((x,i) => {
     if(x[0] === x[0].toUpperCase() && i === 0) {
       return x[0].toUpperCase() + x.slice(1)
     } else if (x[0] === x[0].toLowerCase() && i === 0) { 
       return x[0].toLowerCase() + x.slice(1)
     } else {
       return x[0].toUpperCase() + x.slice(1)
     }
    }).join('')
   }
}
