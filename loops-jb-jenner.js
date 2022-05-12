// Create a for loop that logs each number from 1 - 20.

for(let i = 1; i < 21; i++){ 
    console.log( i )
}

// Create a for loop that logs every other number from 1 - 20.

for(let i = 1; i < 21; i = i + 2){
    console.log(i)
}

for(let i = 1; i < 21; i++){
    if(i % 2 === 0){
        continue
    } else {
        console.log(i) 
    }
}

// Create a for loop that logs the result of each number from 1 - 20 tripled.

for(let i = 1; i < 21; i++){
    console.log(`Currently i = ${i}: `, i * 3)
}

for(let i = 1; i < 21; i++){
    console.log(i * 3)
}

// Create a for loop that logs each even number from 1-20, and in the place of every odd number, returns the word "ODD".

for(let i = 1; i < 21; i++){
    if(i % 2 === 0){
        console.log(i)
    } else {
        console.log("ODD")
    }
}

// Expected output: ODD, 2, ODD, 4, ODD, 6 ...etc
// Consider this variable:

const nums = [3, 57, -9, 20, 67]

// Create the code that will log the largest number from the array.

var largestNumber = -9999999
for(let i = 0; i < nums.length; i++){
    if(nums[i] > largestNumber){
        console.log("New Largest Number: ", nums[i])
        largestNumber = nums[i]
    }
}
console.log("Largest Number: ", largestNumber)

// Create the code that will log the smallest number from the array.

var smallestNumber = 9999999
for(let i = 0; i < nums.length; i++){
    if(nums[i] < smallestNumber){
        console.log("New Smallest Number: ", nums[i])
        smallestNumber = nums[i]
    }
}
console.log("Smallest Number: ", smallestNumber)

// Create the code that will log the remainder of each number when divided by 2.
// Expected output: 1, 1, -1, 0, 1
// Consider this variable:

// const myString = "learn student"
// Create the code that will log the number of times the letter "e" occurs in the string.
// Create the code that will log every other character in the string.
