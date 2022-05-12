// Challenges
// Copy the challenges into your JavaScript file. Comment out the instructions and code the solution to each problem beneath the prompt.

// Consider the variable:

var groceryList = ["chips", "dip", "cookies"]

// Write the code that will add "soda" to the end of the original array.
var soda = ['soda']
console.log(groceryList.concat(soda))

// Write the code that will add "granola" to the end of array without altering the original array.
groceryList.push('granola')
console.log(groceryList)

// Write the code that will return a subset of the array containing only "chips" and "dip".
var apps = groceryList.slice(0, 2)
console.log(apps)
// Write the code that will add "beans" to the "chips" and "dip" array.
apps.push('beans')
console.log(apps)

// Consider the variable:

var numbers = [2, 4, 6, 8, 10]

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
var zero = [0]
console.log(zero.concat(numbers))

// Consider the variable:

var numSet = [2, 13, 6, 8, 4, 2]

// Write the code that finds the index of the first appearance of the number 2.
console.log(numSet.indexOf(2))

// Write the code that finds the index of the last appearance of the number 2.
console.log(numSet.lastIndexOf(2))

// Write the code that returns the number at the third index.
console.log(numSet[3])
// Consider the variable:

var characters = ["y", "a", "r", "r", "a"]
// Write the code that brings all the letters in the characters array together into a string.
characters.join("");
console.log(characters.join(""))

// Write the code that reverses the order of the letters in the characters array and saves it into a variable called charsReversed.
var charsReverse = characters.reverse()
console.log(charsReverse)

// Write the code that brings all the letters in the charsReversed array together into a string with an asterisk between each letter.
charsReverse.join("");
console.log(charsReverse.join("*"))

// Write the code that brings all the letters in the charsReversed array together into a string without separators.
charsReverse.join("");
console.log(charsReverse.join(""))

// Create two arrays consisting of three first names of your cohort members in each.
var Names1 = ["Nic", "Frank", "Mike"]
var Names2 = ["Sean", "Don", "Mary"]

// Write the code that sorts the names in alphabetical order.
console.log(Names1.sort())
console.log(Names2.sort())

// Write the code that sorts the names in reverse alphabetical order.
Names1.sort

// Write the code that sorts all the names in alphabetical order in a single array.

// Consider the variables:

// var numbers = [42, 221, 71, 7, 18, 87]
// var oddIndexes = []
// Write the code that logs the values from the numbers array that are at odd indexes.

// Write the code that adds the values from odd indexes into the oddIndexes array.

