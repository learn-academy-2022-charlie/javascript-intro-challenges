// // Copy the challenges into your JavaScript file. Comment out the instructions and code the solution to each problem beneath the prompt.
//
// Consider the variable:
//
var groceryList = ["chips", "dip", "cookies"]
// Write the code that will add "soda" to the end of the original array.
groceryList.push("soda")
// Write the code that will add "granola" to the end of array without altering the original array.
console.log(groceryList.concat("granola"))
// Write the code that will return a subset of the array containing only "chips" and "dip".
console.log(groceryList.slice(2))
// Write the code that will add "beans" to the "chips" and "dip" array.
console.log(groceryList.pop())
console.log(groceryList.push("beans"))


// Consider the variable:
//
 var numbers = [2, 4, 6, 8, 10]
// Write the code that will add the number 0 to the beginning of the array.
console.log(numbers.unshift(0))
// Write the code that will add the number 12 to the end of the array.
console.log(numbers.push(12))
// Write the code that will remove the first number from the array.
console.log(numbers.shift())
// Write the code that will add the number 0 to the beginning of the array without altering the original array. HINT: it's not .unshift You'll have to get creative! ;)
console.log(numbers.shift())
