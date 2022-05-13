// Write a function named marco that returns "polo".
const marco = () => {
    return "polo"
}
console.log(marco());
// Write a function named greeting that takes a name as an argument and returns "Welcome, <person's name here>!"
// declare function greeting
// inputting name
// output welcome and persons name using string interpolation
const greeting = (name) => {
    return `Welcome, ${name}!`
}
 console.log(greeting("Denise"));




// Write a function named oddOrEven that takes a number as an argument and returns whether the number is odd or even.
// make a function named odd or even
// input a number
// return whether or not a number is odd or even using a conditon statement with a modulus
const oddOrEven = (num) => {
    if(num % 2 === 0 ) {
        return " even"
    } else {
        return "odd"
    }
}
console.log(oddOrEven(4));
// Write a function named triple that takes a number as an argument and returns the result of that number multiplied by 3.
const triple = (num) => {
    return num * 3
}
console.log(triple(6));

// Write a function named multiply that takes two numbers as arguments and returns the result of the numbers multiplied together.

const multiply = (num1 , num2) => {
  return num1 * num2
}
console.log(multiply(2 , 2));

// Write a function named divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".

// need a function name divisibleBy
// ...input num1 , num2 output "num1 is evenly divisible num2" --> else "num1 is not evenly divisble by num2"

const divisibleBy = (num1 , num2) => {
  if(num1%num2 === 0){
    return `${num1} is evenly divisible by ${num2}`
  }else{
    return `${num1} is not evenly divisible by ${num2}`
  }
}
console.log(divisibleBy(60 , 59));
// Write a function named assignGrade that takes a number score as an argument and returns the letter grade for the score.
// make a function assignGrade
// input a number (percentage? - 0-100)--- output return a letter grade (A,B,C,D,F)
// by using a conditional.

const assignGrade = (num) => {
  if(num > 100){
    return "Please enter a valid grade (0-100)"
  }else if(num >= 90){
    return "A"
  }else if(num >= 80){
    return "B"
  }else if(num >= 70){
    return "C"
  }else if(num >= 60){
    return "D"
  }else if (num >= 0){
    return "F"
  }else{
    return "Please enter a valid grade (0-100)"
  }
}
console.log(assignGrade(100));

// Write a function named isLonger that takes two strings as arguments and returns the string that contains the most characters.
// make a function named isLonger
// input "strin1" , "string2" --> output longerString.length using conditionals

const isLonger = (string1 , string2) => {
  if(string1.length > string2.length){
    return string1
  }else{
    return string2
  }
}
console.log(isLonger(123, "1234"));

// Write a function named greaterNum that takes two numbers as arguments and returns whichever number is the greater (higher) number.

// Write a function named yelling that takes a string as an argument and return the string in all uppercase case letters.

// STRETCH Challenges
// The World Translator
// (a) Write a function named helloWorld that takes a language code (e.g. "es", "de", "en") as an argument and returns "Hello World!" in the given language. Ensure you function works for at least 5 languages.
// (b) Have your function default to returning English.

// The Pluralizer
// (a) Write a function named pluralizer that takes a number and a singular noun as arguments and returns the number and pluralized form of the noun, if necessary.

// pluralizer(5, "cat")
// // expected output: "5 cats"

// pluralizer(1, "dog")
// // expected output: "1 dog"
// (b) Enhance your function so it can handle a few collective nouns like "sheep", "goose", "child", "person" and "species".
