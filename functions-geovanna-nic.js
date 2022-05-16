// Challenges
// Copy the challenges into your JavaScript file. Comment out the instructions and code the solution to each problem beneath the prompt. Each solution requires pseudocode. Test your functions with multiple function calls.

// Write a function named marco that returns "polo".

// Function name - marco
// input: none
// output: polo
// create function called marco 
// since there are no arguments once called it will return polo 
const marco = () => {
    return 'polo'
}
console.log(marco())


// Write a function named greeting that takes a name as an argument and returns "Welcome, <person's name here>!"

// Function named = greeting
// input = name
// output = 'Welcome <name>!'
// create function called greeting with an arguement called name
// return 'Welcome <name>!'

const greeting = (name) => {
    return `Welcome ${name}!`
}

console.log(greeting('Austin'))


// Write a function named oddOrEven that takes a number as an argument and returns whether the number is odd or even.

// Function Name = oddOrEven
// input = num
// output = string indicating odd or even number 
// create function named oddOrEven with an argument labeled num
// if number is even return `${num} is even!`
// if number is odd return `${num} is odd!`
const oddOrEven = (num) => {
    if(num % 2 === 0 ){
        return `${num} is even!`
    } else {
        return `${num} is odd!`
    }
}

console.log(oddOrEven(5))

// Write a function named triple that takes a number as an argument and returns the result of that number multiplied by 3.

// Function Name = triple
// input = number
// output = return number multiplied by three 
// Create a function named triple with an argument labled number
// return number multiplied by 3 

const triple = (number) => {
    return number*3
}

console.log(triple(3))

// Write a function named multiply that takes two numbers as arguments and returns the result of the numbers multiplied together.
// Function Name = multiply
// input = num1, num2
// output = return the two numbers multiplied  by eachother

const multiply = (num1, num2) => {
    return num1 * num2
}

console.log(multiply(2, 5))

// Write a function named divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".

// Write a function named assignGrade that takes a number score as an argument and returns the letter grade for the score.

// Write a function named isLonger that takes two strings as arguments and returns the string that contains the most characters.

// Write a function named greaterNum that takes two numbers as arguments and returns whichever number is the greater (higher) number.

// Write a function named yelling that takes a string as an argument and return the string in all uppercase case letters.

// STRETCH Challenges
// The World Translator
// (a) Write a function named helloWorld that takes a language code (e.g. "es", "de", "en") as an argument and returns "Hello World!" in the given language. Ensure you function works for at least 5 languages.
// (b) Have your function default to returning English.

// The Pluralizer
// (a) Write a function named pluralizer that takes a number and a singular noun as arguments and returns the number and pluralized form of the noun, if necessary.