// Challenges
// Copy the challenges into your JavaScript file. Comment out the instructions and code the solution to each problem beneath the prompt.

// Consider the variable:

var groceryList = ["chips", "dip", "cookies"]
// groceryList will only be declared once, we as a group understand that the variable is being modified as throughout the exercise

// Write the code that will add "soda" to the end of the original array.
groceryList.push("soda")
console.log(groceryList)

// Write the code that will add "granola" to the end of array without altering the original array.
var groceryListAdd = ["granola"]
var groceryListNew = groceryList.concat(groceryListAdd)
console.log(groceryListNew) // new combo array
console.log(groceryList) // original list unchanged


// Write the code that will return a subset of the array containing only "chips" and "dip".
console.log(groceryList.slice(0,2))

// Write the code that will add "beans" to the "chips" and "dip" array.
var groceryListTwo = groceryList.slice(0,2)
groceryListTwo.unshift("beans")
console.log(groceryListTwo)

//__________________________________________________________

// Consider the variable:

var numbers = [2, 4, 6, 8, 10]
// numbers will only be declared once, we as a group understand that the variable is being modified as throughout the exercise

// Write the code that will add the number 0 to the beginning of the array.
numbers.unshift(0)
console.log(numbers)

// Write the code that will add the number 12 to the end of the array.
numbers.push(12)
console.log(numbers)

// Write the code that will remove the first number from the array.
numbers.shift()
console.log(numbers)

// Write the code that will add the number 0 to the beginning of the array without altering the original array. HINT: it's not .unshift You'll have to get creative! ;)
var numbersAdd = [0]
var numbersNew = numbersAdd.concat(numbers)
console.log(numbersNew)
console.log(numbers)

// Consider the variable:

var numSet = [2, 13, 6, 8, 4, 2]
// numSet will only be declared once, we as a group understand that the variable is being modified as throughout the exercise


// Write the code that finds the index of the first appearance of the number 2.
console.log(numSet.indexOf(2))

// Write the code that finds the index of the last appearance of the number 2.
console.log(numSet.lastIndexOf(2))

// Write the code that returns the number at the third index.
console.log(numSet[3])

// Consider the variable:

var characters = ["y", "a", "r", "r", "a"]
// characters will only be declared once, we as a group understand that the variable is being modified as throughout the exercise

// Write the code that brings all the letters in the characters array together into a string.
//console.log(characters) this is the array
console.log(characters.join(""))

// Write the code that reverses the order of the letters in the characters array and saves it into a variable called charsReversed.
var charsReversed = characters.reverse()
console.log(charsReversed)

// Write the code that brings all the letters in the charsReversed array together into a string with an asterisk between each letter.
console.log(charsReversed.join("*"))

// Write the code that brings all the letters in the charsReversed array together into a string without separators.
console.log(charsReversed.join(""))

// Create two arrays consisting of three first names of your cohort members in each.
var learnStudentsA = ["Frank", "Valorie", "Denise"]
var learnStudentsB = ["Michael", "CJ", "Sean"]

// Write the code that sorts the names in alphabetical order.
console.log(learnStudentsA.sort())
console.log(learnStudentsB.sort())

// Write the code that sorts the names in reverse alphabetical order.
//Since in the previous step we have sorted in alphabetical order, we just need to reverse
//console.log(learnStudentsA.reverse())
//console.log(learnStudentsB.reverse())
console.log(learnStudentsA.sort((a, b) => -(a>b)||+(a<b)))
console.log(learnStudentsB.sort((a, b) => -(a>b)||+(a<b)))

// Write the code that sorts all the names in alphabetical order in a single array.
var learnStudentsAll = learnStudentsA.concat(learnStudentsB)
console.log(learnStudentsAll.sort())

// Consider the variables:

// var numbers = [42, 221, 71, 7, 18, 87]
// var oddIndexes = []
// Write the code that logs the values from the numbers array that are at odd indexes.

// Write the code that adds the values from odd indexes into the oddIndexes array.