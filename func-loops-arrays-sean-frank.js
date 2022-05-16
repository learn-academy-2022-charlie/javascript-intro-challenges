// Write a function that takes in an array of numbers and returns an array with all numbers multiplied by 3.
var testArr1 = [3, 9, 15, 4, 10]
// expected output --> [9, 27, 45, 12, 30]


const mult3 = (array) => {
  let newArr = []
  for(let i=0; i<array.length; i++){
    newArr.push(array[i] * 3)
  }
  return newArr
}

console.log(mult3(testArr1))


// Write a function that takes in an array of numbers and returns a new array with only odd numbers.
var testArr2 = [0, 2, -7, 3, 5, 8, 10, 13]
// expected output  --> [-7, 3, 5, 13]


// We use a function to iterate each index 
    // each index will use modulo to find an odd or even number 
    // use push to list all numbers of the array 
    // use console.log to display 
const onlyOdd = (array) => {
    let newArr = []
    for(let i=0; i<array.length; i++){
      if(array[i] % 2 === 1){
        newArr.push(array[i])
      }
    }
    return newArr
  }
  
  console.log(onlyOdd(testArr2))


//   Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: use the typeof method.

var comboArr = [7, "n", true, "i", "c", 10, "e", -388, "w", 3, "o", 0, "r", false, "k"]
// expected output --> "nicework"


