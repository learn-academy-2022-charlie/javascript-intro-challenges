
// Challenges

// Copy the challenges into your JavaScript file. Comment out the instructions and code the solution to each problem beneath the prompt.

// Make sure you try different options and change the variables to ensure properly working code.

// Write a statement that takes a variable of item and logs "in budget" if a price is $100 or less.
var item = 80
if(item <= 100) {
    console.log("in budget")
}
// Write a statement that takes a variable of hungry and logs "eat food" if you are hungry and "keep coding" if you are not hungry.
var hungry = true
if(hungry === true) {
    console.log("keep coding")
} else {
    console.log("eat food")
}

// Write a statement that takes a variable of trafficLight and logs "go" if the light is green, "slow down" if the light is yellow and "stop" if the light is red.
var trafficLight = "red"
if(trafficLight === "green") {
    console.log("go")
} else if (trafficLight === "yellow") {
    console.log("slow down")
} else if (trafficLight === "red"){
    console.log("stop")
} else {
    console.log("Get some glasses!")
}

// Write a statement that takes two variables that are numbers and outputs the larger number. If the numbers are equal, output "the numbers are the same".
var num1 = 10
var num2 = 20

if(num1 === num2){
  console.log("the numbers are the same")
}

// Write a statement that takes a variable of a number and logs whether the number is odd, even, or zero.

var num1 = 128318

if(num1 === 0){
  console.log("it is zero");
}else if(num1%2 === 0){
  console.log("it is even");
}else{
  console.log("it is odd");
}

// STRETCH Challenges
// Write a statement that takes a variable of a grade percentage and logs the letter grade for that percentage, if the grade is 100% log "perfect score", if the grade is zero log "no grade available."

var grade = 100

if(grade === 100){
  console.log("perfect score")
}else if(grade === 0){
  console.log("no grade available");
}else if(grade >= 90){
  console.log("A");
}else if(grade >= 80){
  console.log("B");
}else if(grade >= 70){
  console.log("C");
}else if(grade >= 60){
  console.log("D");
}else{
  console.log("F");
}
// Write a statement that takes a variable of a boolean, number, or string data type and logs the data type of the variable. HINT: Check out the JavaScript typeof operator.

var type = [1,2,3,4,5]

if(typeof type === "string"){
  console.log("This is a string")
}else if(typeof type === "boolean"){
  console.log("This is a boolean");
}else if(typeof type === "number"){
  console.log("This is a number");
}else if(typeof type === "object"){
  console.log("This is an object");
}else if(typeof type === "function"){
  console.log("This is a function");
}
// Create a password checker using a single conditional statement. If a user inputs a password with 12 or more characters AND the password includes !, then log "That is a mighty strong password!" If the user's password is 8 or more characters OR includes !, then log "That password is strong enough." Log "That is not a valid password." for every other input.

var password = "thispa55word!"

if ( password.length >= 12 && password.includes("!")) {
  console.log("That is a mighty strong password!")
} else if(password.length >=8 || password.includes("!")) {
  console.log("That password is strong enough.")
} else {
  console.log("That is not a valid password.")
}