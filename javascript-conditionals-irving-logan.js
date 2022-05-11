// Challenges
// Copy the challenges into your JavaScript file. Comment out the instructions and code the solution to each problem beneath the prompt.

// Make sure you try different options and change the variables to ensure properly working code.

// Write a statement that takes a variable of item and logs "in budget" if a price is $100 or less.
//var item = 110
var item = 70
if(item <= 100) {
    console.log("Within the Budget")
} else {
    console.log("Not enough money!")
}
// Write a statement that takes a variable of hungry and logs "eat food" if you are hungry and "keep coding" if you are not hungry.
//var hungry = "hungry"
var hungry = "notHungry"
if(hungry === "hungry") {
    console.log("Eat food")
} else {
    console.log("Keep Coding")
}
// Write a statement that takes a variable of trafficLight and logs "go" if the light is green, "slow down" if the light is yellow and "stop" if the light is red.
//var trafficLight = "green"
//var trafficLight = "yellow"
var trafficLight = "red"

if(trafficLight === "green") {
    console.log("go")
} else if(trafficLight === "yellow") {
    console.log("slow down")
} else {
    console.log("stop")
}
// Write a statement that takes two variables that are numbers and outputs the larger number. If the numbers are equal, output "the numbers are the same".
// var numbers1 = 2022
var numbers1 = 7
var numbers2 = 7
if(numbers1 > numbers2){
  console.log(numbers1)
}
else if (numbers1 === numbers2) {
  console.log("the numbers are the same")
}
// Write a statement that takes a variable of a number and logs whether the number is odd, even, or zero.
var number = 8
if (number === 0){
  console.log("the number is zero")
}
else if(number % 2 == 0){
  console.log("Even")
}
else if (number % 2 == 1){
  console.log("odd")
}
// STRETCH Challenges
// Write a statement that takes a variable of a grade percentage and logs the letter grade for that percentage, if the grade is 100% log "perfect score", if the grade is zero log "no grade available."

// Write a statement that takes a variable of a boolean, number, or string data type and logs the data type of the variable. HINT: Check out the JavaScript typeof operator.

// Create a password checker using a single conditional statement. If a user inputs a password with 12 or more characters AND the password includes !, then log "That is a mighty strong password!" If the user’s password is 8 or more characters OR includes !, then log "That password is strong enough." Log "That is not a valid password." for every other input.
