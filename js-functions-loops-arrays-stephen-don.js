// Write a function that takes in an array of numbers and returns an array with all numbers multiplied by 3.
var testArr1 = [3, 9, 15, 4, 10]
// // --> [9, 27, 45, 12, 30]

const mult3 = (array) => {
  let newArray = []
  for (i = 0; i < array.length; i++){
    newArray.push(array[i] * 3)
  }
  return newArray
}
console.log(mult3(testArr1));
// Write a function that takes in an array of numbers and returns a new array with only odd numbers.
var testArr2 = [0, 2, -7, 3, 5, 8, 10, 13]
// // --> [-7, 3, 5, 13]

const odd = (array) => {
  let newArray = []
  for (i = 0; i < array.length; i++){
    if(array[i]%2 != 0){
      newArray.push(array[i])
    }
  }
  return newArray
}
console.log(odd(testArr2));
// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: use the typeof method.
var comboArr = [7, "n", true, "i", "c", 10, "e", -388, "w", 3, "o", 0, "r", false, "k"]
// // --> "nicework"

const letters = (array) => {
  let stringArray = []
  for (i = 0; i < array.length; i++){
    if(typeof array[i] === "string"){
      stringArray.push(array[i])
    }
  }
  return stringArray.join("")
}
console.log(letters(comboArr));
// Create a function that takes in an array of numbers and returns the sum.
var addThese1 = [1, 2, 3, 4]
// // --> 10
//
var addThese2 = []
// // --> 0

const adding = (array) => {
  let addArray = 0
  for(i = 0; i < array.length; i++){
    addArray = array[i] + addArray
  }
  return addArray
}
console.log(adding(addThese1));
console.log(adding(addThese2));


// Create a function that takes in an array of numbers and returns the index of the largest number.


// const biggestNum = (array) => {
//     let whichIndex = array[0]
//     for (let i = 0; i < array.length; i++) {
//         if (whichIndex < array[i+1]) {
//             whichIndex = array[i+1]
//         }
//     }
//     return whichIndex
// }

// const biggestNum (array) => {
//     let whichIndex = array[0]
//     for (let i = 0; i < array.length; i++) {
//         if (whichIndex < array[i+1]) {
//             whichIndex = array[i+1]
//         }
//     }
//     let originalArray = array
//     const indexBiggestNum = (originalArray, whichIndex) => {

//     }

// }


// console.log(biggestNum(indexHighestNumber))
// // --> 1
var indexHighestNumber = [1, 4, 2, 3, 4, 4, 4, 4, 4]

// function indexBiggestNum (array) {

//     function biggestNum() {
//         let whichIndex = array[0]
//         for (let i = 0; i < array.length; i++) {
//         if (whichIndex < array[i+1]) {
//             whichIndex = array[i+1]
//          }
//       }
//       return whichIndex
//     }
//     let indexArray = []
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === biggestNum()) {
//             indexArray.push(i)
//         }
//     }
//     return indexArray
// }

// console.log(indexBiggestNum(indexHighestNumber))

const biggestNumIndex = (array) => {
    let arrayIndex = []
    let biggestNum = Math.max(...array)
    console.log(biggestNum)
    for (let i = 0; i < array.length; i++) {
        if (array[i] === biggestNum) {
            arrayIndex.push(i)
        }

    }
    return arrayIndex
}

console.log(biggestNumIndex(indexHighestNumber))


// STRETCH Challenges

// Create a function that takes in two arrays and returns one array with no duplicate values.
var arr1 = [3, 7, 10, 5, 4, 3, 3]
var arr2 = [7, 8, 2, 3, 1, 5, 4]
// console.log(arr1.indexOf(11))

const checkDupes = (array1, array2) => {
    let comboArray = array1.concat(array2)
    //console.log(comboArray)
    let noDupeArray = []
    for (let i = 0; i < comboArray.length; i++) {
        if (noDupeArray.indexOf(comboArray[i]) === -1) {
            noDupeArray.push(comboArray[i])
        }

    }
    return noDupeArray
}

console.log(checkDupes(arr1, arr2))
// // --> [3, 7, 10, 5, 4, 8, 2, 1]


// Create a function that takes in two numbers as arguments and returns an array the length of the first number filled with the second number.

// var arrayLength = 6
// var arrayValue = 0

const makeArray = (arrayL, arrayV) => {
    let newArray = []
    for (let i = 0; i < arrayL; i++) {
        newArray.push(arrayV)
    }
    return newArray
}

//console.log(makeArray(arrayLength, arrayValue))
// // --> [0, 0, 0, 0, 0, 0]

// var arrayLength = 4
// var arrayValue = 11
// console.log(makeArray(arrayLength, arrayValue))
// // --> [11, 11, 11, 11]

// Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function.
var addUp1 = 4

const addUp = (whereTo) => {
    let addArray = 0
    for (let i = 0; i <= whereTo; i++) {
        addArray = addArray + i
    }
    return addArray
}
console.log(addUp(addUp1))
// // 1 + 2 + 3 + 4 = 10
// // --> 10


var addUp2 = 10
console.log(addUp(addUp2))
// // 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 = 55
// // --> 55

var addUp3 = 600
console.log(addUp(addUp3))
// // --> 180300
// EPIC Challenges

// Create a function called highLow that takes in a number and returns whether the number is higher or lower than the "answer".
// Create an HTML page and link your JavaScript file. More info here.
// As a user, I see a prompt or input where I can guess a number between 1 and 100 (both inclusive).
// As a user, I can see if my guess is too high or too low.
// As a user, if I guess the "answer" correctly I am notified that I won.
// As a user, I can continue to guess the "answer" until I am correct.
// STRETCH: As a user, if I have not guessed the correct number in seven tries I see a losing message.
