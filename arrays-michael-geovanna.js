// // Consider the variable:

var groceryList = ["chips", "dip", "cookies"]
// // Write the code that will add "soda" to the end of the original array.
groceryList.push("soda")
console.log(groceryList)

// // Write the code that will add "granola" to the end of array without altering the original array.
console.log(groceryList.concat("granola"))
console.log(groceryList)

// // Write the code that will return a subset of the array containing only "chips" and "dip".
console.log(groceryList.slice(0, 2))
// Output: 'chips', 'dip'

// // Write the code that will add "beans" to the "chips" and "dip" array.
var newGrocery = groceryList.slice (0,2)
// var newGrocery = 'chips', 'dip'

newGrocery.push("beans")
console.log(newGrocery)
// Output: 'chips', 'dip', 'beans'

// // Consider the variable:

var numbers = [2, 4, 6, 8, 10]
// // Write the code that will add the number 0 to the beginning of the array.
numbers.unshift(0)
console.log(numbers)
// Output: 0, 2, 4, 6, 8, 10

// // Write the code that will add the number 12 to the end of the array.
numbers.push(12)
console.log(numbers)
// Output:   0,  2,  4, 6, 8, 10, 12

// // Write the code that will remove the first number from the array.
numbers.shift()
console.log(numbers)
// Output: 2, 4, 6, 8, 10, 12

// // Write the code that will add the number 0 to the beginning of the array without altering the original array. HINT: it's not .unshift You'll have to get creative! ;)
var zero = [0]
console.log(zero.concat(numbers))
// Output: 0,  2,  4, 6, 8, 10, 12

// // Consider the variable:

var numSet = [2, 13, 6, 8, 4, 2]

// // Write the code that finds the index of the first appearance of the number 2.
console.log(numSet.indexOf(2))
// Output: 0

// // Write the code that finds the index of the last appearance of the number 2.
console.log(numSet.lastIndexOf(2))
// Output: 5

// // Write the code that returns the number at the third index.
console.log(numSet[3])
// Output: 8

// // Consider the variable:

var characters = ["y", "a", "r", "r", "a"]
// // Write the code that brings all the letters in the characters array together into a string.
console.log(characters.join(""))
// Output: yarra

// // Write the code that reverses the order of the letters in the characters array and saves it into a variable called charsReversed.
var charsReversed = (characters.reverse())
console.log(charsReversed)
// Output: [ 'a', 'r', 'r', 'a', 'y' ]

// // Write the code that brings all the letters in the charsReversed array together into a string with an asterisk between each letter.
console.log(charsReversed.join("*"))
// Output: a*r*r*a*y

// // Write the code that brings all the letters in the charsReversed array together into a string without separators.
console.log(charsReversed.join(""))
// Output: array

// // Create two arrays consisting of three first names of your cohort members in each.
var cohort1 = ["geovanna", "michael", "don"]
var cohort2 = ["frank", "sean", "ivan"]

// // Write the code that sorts the names in alphabetical order.
var cohort3 = (cohort1.concat(cohort2))
console.log(cohort3.sort())

// // Write the code that sorts the names in reverse alphabetical order.
console.log(cohort3.reverse())

// // Write the code that sorts all the names in alphabetical order in a single array.
console.log(cohort3.sort())

// // Consider the variables:

var numbers = [42, 221, 71, 7, 18, 87]
var oddIndexes = []

// // Write the code that logs the values from the numbers array that are at odd indexes.
console.log(numbers.filter())

// // Write the code that adds the values from odd indexes into the oddIndexes array.