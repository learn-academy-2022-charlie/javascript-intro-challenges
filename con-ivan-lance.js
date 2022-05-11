// Write a statement that takes a variable of item and logs "in budget" if a price is $100 or less.
var item = 70
if(item <= 100) {
    console.log("In Budget")
}
// Write a statement that takes a variable of hungry and logs "eat food" if you are hungry and "keep coding" if you are not hungry.
var hungry = 1
if(hungry === true) {
    console.log("Eat Food")
} else{
    console.log("Keep Coding")
}
// Write a statement that takes a variable of trafficLight and logs "go" if the light is green, "slow down" if the light is yellow and "stop" if the light is red.
var traffickLight = "yel"
if(traffickLight === "green") {
    console.log("go")
} else if(traffickLight === "yellow") {
    console.log("slow down")
} else {
    console.log("stop")
}
// Write a statement that takes two variables that are numbers and outputs the larger number. If the numbers are equal, output "the numbers are the same".
var num1 = 33
var num2 = 33

if(num1 > num2) {
    console.log(num1)
} else if(num1 < num2){
    console.log(num2)
} else {
    console.log("the numbers are the same")
}

// if(num1 < num2){
//     console.log(num2)
// } else {
//     console.log("the numbers are the same")
// }

// Write a statement that takes a variable of a number and logs whether the number is odd, even, or zero.
var num = 22
if(num === 0) {
    console.log("zero")
} else if((num % 2) === 1) {
    console.log("odd")
} else { 
    console.log("even")
}

