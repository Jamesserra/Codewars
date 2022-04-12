//Simple, remove the spaces from the string, then return the resultant string.

function noSpace(x){
  let y = x.replace(/\s+/g, '');
  return y;
}