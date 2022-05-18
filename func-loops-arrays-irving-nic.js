// Challenges
// Copy the challenges into your JavaScript file. Comment out the instructions and code the solution to each problem beneath the prompt.
// Don't forget to pseudo code.

// Write a function that takes in an array of numbers and returns an array with all numbers multiplied by 3.
// var testArr1 = [3, 9, 15, 4, 10]
// // --> [9, 27, 45, 12, 30]

    //Create a function named mult5
        // Takes in an argument of array
    //assigned an empty array variable to newArr
    //Create a for loop to iterate through array
        //.push() array times three into the newArr
    //Return newArr
    //Console.log(mult5(testArr1))

// const mult5 = (array) => {
//     let newArr = []
//     for(let i=0; i<array.length; i++){
//       newArr.push(array[i] * 3)
//     }
//     return newArr
//   }
// console.log(mult5(testArr1))


// Write a function that takes in an array of numbers and returns a new array with only odd numbers.
// var testArr2 = [0, 2, -7, 3, 5, 8, 10, 13]
// // --> [-7, 3, 5, 13]

    //Create a function named oddArray
        //It takes in an argument of array
    // Assign a new variable with the name newOddArray
    //Create a for loop to cycle through the arrays indexes
        //Inside of the loop create an if statement to see if the numbers are odd
            //If odd push odd numbers into newOddArray
        //Return newOddArray
    //console.log(oddArray(testArr2))

// const oddArray = (array) => {
//     let newOddArray = []
//     for(let i=0; i < array.length; i++){
//         if(array[i] % 2 != 0){
//             newOddArray.push(array[i])
//         }
//     }
//     return newOddArray
// }
//  console.log(oddArray(testArr2))


// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: use the typeof method.
// var comboArr = [7, "n", true, "i", "c", 10, "e", -388, "w", 3, "o", 0, "r", false, "k"]
// // --> "nicework"

    //Create a function named letterFunc
        //It takes in an argument of array
    //Assign a new variable with the name letters which equals an empty array
    //Create a for loop to iterate through the array
        //Inside the for compare if the indexes in the array are a string using the tyepof method
            //If a string .push() into the new letters array
        //Return letters.join('') which turns the array into a string
        //console.log(letterFunc(comboArr))

// const letterFunc = (array) => {
//     let letters = []
//     for(let i=0 ; i< array.length; i++){
//         if( typeof array[i] === 'string'){
//             letters.push(array[i])
//         }
//     }
//     return letters.join('')
// }

// console.log(letterFunc(comboArr))

// Create a function that takes in an array of numbers and returns the sum.
// var addThese1 = [1, 2, 3, 4]
// // --> 10
// var addThese2 = []
// // --> 0

    //Create a function called sum
        //It will take in one argument named array
    //Assign a new variable to 0 named newSum
        //Assign it to zero because we will add the indexes of the array to 0
    //Create a for loop to loop through the indexes
        //As it loops through it will add the indexes to the newSum variable
    //Return newSum
    //Console.log(sum(addThese2))

// const sum = (array) => {
//         let newSum = 0
//         for(let i=0; i<array.length; i++){
//           newSum += array[i]
//         }
//         return newSum
//       }
//       console.log(sum(addThese2))



// Create a function that takes in an array of numbers and returns the index of the largest number.
var indexHighestNumber = [1, 4, 2, 3]
// // --> 1

// create a function with one argument
//assign a variable to zero
//create a for loo that iterates trogh the arrays
// if statement thet compares it to the largest number
//reasign number variable to the largest number
//return arrya index of highest number
// console log the function


const largestNum = (array) => {
  let number = 0
 for(let i=0; i<array.length; i++){
   if(array[i] > number){
     number = array[i]
   }
 }return array.indexOf(number)
}
console.log(largestNum(indexHighestNumber))


// STRETCH Challenges

// Create a function that takes in two arrays and returns one array with no duplicate values.
// var arr1 = [3, 7, 10, 5, 4, 3, 3]
// var arr2 = [7, 8, 2, 3, 1, 5, 4]
// // --> [3, 7, 10, 5, 4, 8, 2, 1]
// Create a function that takes in two numbers as arguments and returns an array the length of the first number filled with the second number.
// var arrayLength = 6
// var arrayValue = 0
// // --> [0, 0, 0, 0, 0, 0]

// var arrayLength = 4
// var arrayValue = 11
// // --> [11, 11, 11, 11]
// Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function.
// var addUp1 = 4
// // 1 + 2 + 3 + 4 = 10
// // --> 10

// var addUp2 = 10
// // 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 = 55
// // --> 55

// var addUp3 = 600
// // --> 180300
// EPIC Challenges

// Create a function called highLow that takes in a number and returns whether the number is higher or lower than the "answer".
// Create an HTML page and link your JavaScript file. More info here.
// As a user, I see a prompt or input where I can guess a number between 1 and 100 (both inclusive).
// As a user, I can see if my guess is too high or too low.
// As a user, if I guess the "answer" correctly I am notified that I won.
// As a user, I can continue to guess the "answer" until I am correct.
// STRETCH: As a user, if I have not guessed the correct number in seven tries I see a losing message.
