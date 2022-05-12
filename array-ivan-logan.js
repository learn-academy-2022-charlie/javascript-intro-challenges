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

