// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

function moveZeros(arr) {
  let x = arr.filter(i => i === 0)

  arr.forEach(t => {
    const index = arr.indexOf(0);
    if (index > -1) {
      arr.splice(index, 1);
    }
  })
  return arr.concat(x)
}