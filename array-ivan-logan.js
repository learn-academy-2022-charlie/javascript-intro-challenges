var groceryList = ["chips", "dip", "cookies"]

// Write the code that will add "soda" to the end of the original array.

groceryList.push("soda")
console.log(groceryList)

// Write the code that will add "granola" to the end of array without altering the original array.
	var granola = ["granola"] 
	console.log(groceryList.concat(granola))

// Write the code that will return a subset of the array containing only "chips" and "dip".
var groceryList = ["chips", "dip", "cookies"]

		groceryList.pop()
			console.log(groceryList)

// Write the code that will add "beans" to the "chips" and "dip" array.

	groceryList.push("beans")
		console.log(groceryList)



var numbers = [2, 4, 6, 8, 10]
// Write the code that will add the number 0 to the beginning of the array.
numbers.unshift(0)
console.log(numbers)


// Write the code that will add the number 12 to the end of the array.
numbers.push(12)
console.log(numbers)
// Write the code that will remove the first number from the array.
numbers.shift(0)
console.log(numbers)
// Write the code that will add the number 0 to the beginning of the array without altering the original array. HINT: it's not .unshift You'll have to get creative! ;)

var zero = [0]

numbers.concat(zero)
console.log(numbers.concat(zero).sort((a, b) => a - b))

var numSet = [2, 13, 6, 8, 4, 2]

// Write the code that finds the index of the first appearance of the number 2.

console.log(numSet.indexOf(2))


// Write the code that finds the index of the last appearance of the number 2.

console.log(numSet.lastIndexOf(2))

// Write the code that returns the number at the third index.

console.log(numSet.indexOf(8))

var characters = ["y", "a", "r", "r", "a"]

// Write the code that brings all the letters in the characters array together into a string.

console.log(characters.join(""))

// Write the code that reverses the order of the letters in the characters array and saves it into a variable called .

	var charsReversed = characters.reverse()
	console.log(charsReversed)


// Write the code that brings all the letters in the charsReversed array together into a string with an asterisk between each letter.

	
	console.log(charsReversed.join("*"))


// Write the code that brings all the letters in the charsReversed array together into a string without separators.
console.log(charsReversed.join(""))


// Create two arrays consisting of three first names of your cohort members in each.

var namesOne = ["Ivan", "Logan", "Collin" ] 
var namesTwo = ["James", "JB", "Mary"]

// Write the code that sorts the names in alphabetical order.
namesOne.sort()
namesTwo.sort()
console.log(namesOne, namesTwo)

// Write the code that sorts the names in reverse alphabetical order.
namesOne.sort()
namesTwo.sort()

console.log(namesOne.reverse(), namesTwo.reverse())

// Write the code that sorts all the names in alphabetical order in a single array.
var allNames = namesOne.concat(namesTwo)

console.log(allNames.sort())

// 
var numbers = [42, 221, 71, 7, 18, 87]
var oddIndexes = []

// Write the code that logs the values from the numbers array that are at odd indexes.
var oddOne = numbers.indexOf(221)
var oddTwo = numbers.indexOf(7)
var oddThree = numbers.indexOf(87)

console.log(oddOne, oddTwo, oddThree)

// Write the code that adds the values from odd indexes into the oddIndexes array.

console.log(oddIndexes.concat([oddOne, oddTwo, oddThree]))